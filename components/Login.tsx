import React from 'react';

const Login = () => {
  return (
    <div className="bg-gray-200 flex h-screen items-center justify-center">
      <form className="bg-white p-6 rounded shadow-md">
        <h2 className="mb-4 text-2xl">Login</h2>
        <input
          type="email"
          placeholder="Email"
          className="border mb-4 p-2 rounded w-full"
        />
        <input
          type="password"
          placeholder="Password"
          className="border mb-4 p-2 rounded w-full"
        />
        <button className="bg-blue-500 p-2 rounded text-white w-full">Login</button>
      </form>
    </div>
  );
};

export default Login;