import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import clsx from "clsx";

const Navbar = ({ isAdmin, isLoggedIn }) => {
  const [isSideMenuOpen, setMenu] = useState(false);

  return (
    <main>
      {/* Top Navbar */}
      <nav className="flex justify-between px-8 items-center py-6 bg-gray-600 text-white">
        <div className="flex items-center gap-8">
          <section className="flex items-center gap-4">
            {/* Menu Icon */}
            <FiMenu
              onClick={() => setMenu(true)}
              className="text-3xl cursor-pointer lg:hidden"
            />
            {/* Logo */}
            <Link to="/" className="text-4xl font-mono">
              Quiz Maker
            </Link>
          </section>

          {/* Desktop Links */}
          <div className="hidden lg:flex gap-4">
            <Link to="/" className="hover:underline">Home</Link>
            {!isLoggedIn && (
              <>
                <Link to="/login" className="hover:underline">Login</Link>
                <Link to="/register" className="hover:underline">Register</Link>
              </>
            )}
            {isLoggedIn && (
              <>
                <Link to="/dashboard" className="hover:underline">Dashboard</Link>
                {isAdmin ? (
                  <>
                    <Link to="/admin/quizzes" className="hover:underline">Manage Quizzes</Link>
                    <Link to="/admin/create" className="hover:underline">Create Quiz</Link>
                  </>
                ) : (
                  <>
                    <Link to="/user/quizzes" className="hover:underline">Quizzes</Link>
                    <Link to="/user/1/results" className="hover:underline">My Results</Link>
                  </>
                )}
                <Link to="/settings" className="hover:underline">Settings</Link>
                {/* <Link to="/logout" className="hover:underline">Logout</Link> */}
              </>
            )}
          </div>
        </div>

        {/* Mobile Sidebar */}
        <div
          className={clsx(
            "fixed h-full w-screen lg:hidden bg-black/50 backdrop-blur-sm top-0 right-0 -translate-x-full transition-all",
            isSideMenuOpen && "translate-x-0"
          )}
        >
          <section className="text-black bg-white flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-50 w-56 flex">
            <IoCloseOutline
              onClick={() => setMenu(false)}
              className="mt-0 mb-8 text-3xl cursor-pointer"
            />
            <Link to="/" className="font-bold">Home</Link>
            {!isLoggedIn && (
              <>
                <Link to="/login" className="font-bold">Login</Link>
                <Link to="/register" className="font-bold">Register</Link>
              </>
            )}
            {isLoggedIn && (
              <>
                <Link to="/dashboard" className="font-bold">Dashboard</Link>
                {isAdmin ? (
                  <>
                    <Link to="/admin/quizzes" className="font-bold">Manage Quizzes</Link>
                    <Link to="/admin/create" className="font-bold">Create Quiz</Link>
                  </>
                ) : (
                  <>
                    <Link to="/user/quizzes" className="font-bold">Quizzes</Link>
                    <Link to="/user/1/results" className="font-bold">My Results</Link>
                  </>
                )}
                <Link to="/settings" className="font-bold">Settings</Link>
                {/* <Link to="/logout" className="font-bold">Logout</Link> */}
              </>
            )}
          </section>
        </div>

        {/* Right Section */}
        <section className="flex items-center gap-4">
          {!isLoggedIn ? (
            <Link to="/login" className="hover:underline text-white">Login</Link>
          ) : (
            <Link to="/logout" className="hover:underline text-white">Logout</Link>
          )}
        </section>
      </nav>
      <hr />
    </main>
  );
};

export default Navbar;
