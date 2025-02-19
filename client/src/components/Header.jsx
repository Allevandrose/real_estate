import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx- p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-500">Ibrahim</span>
            <span className="text-slate-700">Estate</span>
          </h1>
        </Link>
        <form className="bg-slate-100 flex items-center p-4">
          <input
            className="bg-transparent  rounded-lg focus:outline-none w-24 sm:w-64"
            type="text"
            placeholder="Search...."
          />
          <FaSearch className="text-slate-500 hover:text-slate-700" />
        </form>
        <ul className="flex gap-3 p-1">
          <Link to="/">
            <li className="hidden sm:inline text-slate-700 hover:text-blue-500">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline text-slate-700 hover:text-blue-500">
              About
            </li>
          </Link>
          <Link to="/sign-in">
            <li className="p-1.5 w-30 bg-green-700 rounded-md sm:inline text-white hover:bg-green-600">
              Sign-in
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
