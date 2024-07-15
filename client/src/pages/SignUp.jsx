import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      setLoading(true);

      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success === false) {
        setError(data.message), setLoading(false);
        return;
      }
      setLoading(false);
      setError(null);
      navigate("/sign-in");
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  console.log(formData);
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          className="border p-3 rounded-lg "
          type="text"
          placeholder="username"
          id="username"
          onChange={handleChange}
        />
        <input
          className="border p-3 rounded-lg "
          type="email"
          placeholder="email"
          id="email"
          onChange={handleChange}
        />
        <input
          className="border p-3 rounded-lg "
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
        >
          {loading ? "Loading....." : "Sign Up"}
        </button>
      </form>
      <div className="flex gap-1 mt-3">
        <p>Already have an account?</p>
        <Link to={"/sign-up"}>
          <span className="text-blue-700 hover:text-blue-800">Sign up</span>
        </Link>
      </div>
      {error && (
        <p className="text-white mt-5 rounded-md bg-red-700 p-6 shadow-sm">
          {error}
        </p>
      )}
    </div>
  );
}
