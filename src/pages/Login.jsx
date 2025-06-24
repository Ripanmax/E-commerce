import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] bg-gray-100 p-6">
      <h2 className="text-3xl font-bold text-blue-700 mb-6">USER LOGIN</h2>
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full max-w-sm px-4 py-2 mb-4 border border-gray-300 rounded"
      />
      <input
        type="password"
        placeholder="Enter your password"
        className="w-full max-w-sm px-4 py-2 mb-4 border border-gray-300 rounded"
      />
      <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
        Log In
      </button>

      <p className="mt-4 text-sm">
        Don't have an Account? <a href="/register" className="text-blue-600 underline">Sign Up</a>
      </p>
      <p className="text-sm">
        Forgot Password? <span className="text-blue-600 underline">Reset Password</span>
      </p>
    </div>
  );
};

export default Login;

