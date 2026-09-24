import { TbBrandMeta } from 'react-icons/tb'
import { IoLogoInstagram } from 'react-icons/io5'
import { FaXTwitter } from 'react-icons/fa6'

const Topbar = () => {
  return (
    <div className="bg-rabbit-red text-white">
      <div className="container mx-auto py-4 flex justify-between items-center">
        <div className="hidden md:flex items-center gap-4">
          <a href="#" className="hover:text-gray-300" aria-label="Meta">
            <TbBrandMeta className="h-5 w-5" />
          </a>
          <a href="#" className="hover:text-gray-300" aria-label="Instagram">
            <IoLogoInstagram className="h-5 w-5" />
          </a>
          <a href="#" className="hover:text-gray-300" aria-label="X">
            <FaXTwitter className="h-5 w-5" />
          </a>
        </div>
        <div className="text-sm text-center flex-grow">
            <span> We ship worldwide - Fast and reliable shipping</span>
        </div>
        <div className="text-sm hidden md:block">
            <a href="tel:+1234567890" className="hover:text-gray-300">
                Call us: +1 (234) 567-890
            </a>
        </div>
        
      </div>
    </div>
  )
}

export default Topbar;