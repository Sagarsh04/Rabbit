import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa6';
import { Outlet } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';

const AdminLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="min-h-screen flex flex-col md:flex-row bg-gray-100">

            {/* Mobile Header */}
            <div className="flex md:hidden p-4 bg-gray-900 text-white z-30">
                <button onClick={toggleSidebar}>
                    <FaBars size={24} />
                </button>

                <h1 className="ml-4 text-xl font-medium">
                    Admin Dashboard
                </h1>
            </div>

            {/* Mobile Overlay */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-20 md:hidden"
                    onClick={toggleSidebar}
                />
            )}

            {/* Sidebar */}
            <aside
                className={`
                    bg-gray-900 text-white
                    w-64
                    min-h-screen
                    fixed md:sticky
                    top-0 left-0
                    z-30
                    transform
                    ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
                    md:translate-x-0
                    transition-transform duration-300
                `}
            >
                <AdminSidebar />
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-6">
                <Outlet />
            </main>

        </div>
    );
};

export default AdminLayout;