"use client";

import { useState } from "react";
import { auth } from "@/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

import Link from "next/link";

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((credentials) => console.log(credentials))
      .catch((error) => {
        window.alert("Cannot email and/or password!");
        console.error(`Credentials not found: ${error} `);
      });
  };
  return (
    <div className="flex flex-col items-center justify-center mt-32 max-h-screen">
      <h1 className="text-2xl font-semibold">
        <span className="text-sky-500">Login</span> now
      </h1>
      <div className="bg-white min-w-fit min-h-fit p-4 rounded-lg flex flex-col gap-y-4 items-center mt-4">
        <form className="flex flex-col gap-y-4" onSubmit={handleSubmit}>
          <label htmlFor="email" placeholder="Email" className="text-2xl">
            Email:
          </label>
          <input
            id="email"
            type="email"
            value={email}
            placeholder="Enter email here"
            className="py-2 indent-2"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <label htmlFor="password" className="text-2xl">
            Password:
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter password"
            className="py-2 indent-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button className="button">Login</button>
        </form>
        <p className="text-center">Not a member?</p>
        <Link href="/register" className="text-sky-500 hover:underline">
          Register now
        </Link>
      </div>
    </div>
  );
};
export default Page;
