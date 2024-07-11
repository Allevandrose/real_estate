import React from "react";
import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
      <form className="flex flex-col gap-4">
        <input
          className="border p-3 rounded-lg "
          type="text"
          placeholder="username"
          id="username"
        />
        <input
          className="border p-3 rounded-lg "
          type="email"
          placeholder="email"
          id="email"
        />
        <input
          className="border p-3 rounded-lg "
          type="password"
          placeholder="password"
          id="password"
        />
        <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
          Sign In
        </button>
      </form>
      <div className="flex gap-1 mt-3">
        <p>Already have an account?</p>
        <Link to={"/sign-up"}>
          <span className="text-blue-700 hover:text-blue-800">Sign up</span>
        </Link>
      </div>
    </div>
  );
}
