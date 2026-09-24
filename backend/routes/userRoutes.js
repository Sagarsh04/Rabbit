const express=require("express");
const User=require("../models/User");
const jwt=require("jsonwebtoken");
const{protect}=require("../middleware/authMiddleware");

const router=express.Router();

//@route POST /api/users/register
//@desc Register a new user
//@acess Publc

router.post("/register",async(req,res)=>{
    const{name, email, password}=req.body;

    try{
        //Registrationn logic
        let user=await User.findOne({email});
        
        if(user) return res.status(400).json({message:"User already exists"});

        user=new User({name, email, password});
        await user.save();

        //Create JWT Payload
        const payload={user:{id:user._id,role:user.role}};

        // Sign and return the token along the user data 

        jwt.sign(payload,
            process.env.JWT_SECRET, 
            {expiresIn:"40h"},
            (err,token) =>{
            if(err) throw err;

            //send the user and token in response
            res.status(201).json({
                user:{
                    _id:user._id,
                    name:user.name,
                    email:user.email,
                    role:user.role,
                },
                token,
            });
        });
    }catch (error){
        res.status(500).json({
            message: "Server Error",
            error: error.message
        });
    }
});

//@route Post /api/users/login
//@desc Authenticate User
// acess Public

router.post("/login", async(req,res)=>{
    const {email, password}=req.body;

    try{
        //Find user by email
        let user=await User.findOne({email});

        if(!user) return res.status(400).json({message:"Invalid credentials"});

        const isMatch= await user.matchPassword(password);

        if(!isMatch) return res.status(400).json({message:"Invalid credentials"});

        //Create JWT Payload
        const payload={user:{id:user._id,role:user.role}};

        // Sign and return the token along the user data 

        jwt.sign(payload,
            process.env.JWT_SECRET, 
            {expiresIn:"40h"},
            (err,token) =>{
            if(err) throw err;

            //send the user and token in response
            res.json({
                user:{
                    _id:user._id,
                    name:user.name,
                    email:user.email,
                    role:user.role,
                },
                token,
            });
        });

    }catch(error){
        console.error(error);
        res.status(500).send("Server Error");

    }
});

//@route GET /api/users/profile
//@desc GET logged-in user's profile(Protected Route)
//@acess Private

router.get("/profile", protect, async(req,res)=>{
    res.json(req.user);

});

module.exports=router;