"use client";

import Link from "next/link";

import { auth } from "@/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";

const Page = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [invalid, setInvalid] = useState(false);
  useEffect(() => {
    password !== confirm || password === ""
      ? setInvalid(true)
      : setInvalid(false);
  }, [password, confirm]);
  const createUser = (e) => {
    e.preventDefault();
    if (!invalid) {
      createUserWithEmailAndPassword(auth, email, password).then(
        (credentials) => console.log(credentials)
      );
    } else {
      window.alert("Passwords do not match!");
    }
    setName("");
    setEmail("");
    setPassword("");
    setConfirm("");
    setInvalid(false);
  };
  return (
    <div className="flex flex-col items-center justify-center mt-32 max-h-screen">
      <h1 className="text-2xl font-semibold">
        <span className="text-sky-500">Create</span> an account
      </h1>
      <div className="bg-white min-w-fit min-h-fit p-4 rounded-lg flex flex-col gap-y-4 items-center mt-4 lg:min-w-[15%]">
        <form className="flex flex-col gap-y-4" onSubmit={createUser}>
          <label htmlFor="name" className="text-2xl">
            Name:
          </label>
          <input
            id="name"
            type="text"
            value={name}
            placeholder="Enter name here"
            className="py-2 indent-2"
            onChange={(e) => setName(e.target.value)}
          ></input>
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
          <label htmlFor="confirm" className="text-2xl">
            Confirm Password:
          </label>
          <input
            id="confirm"
            type="password"
            placeholder="Confirm password"
            className="py-2 indent-2"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
          ></input>
          {invalid && (
            <p className="text-sm text-red-600/80">Passwords do not match!</p>
          )}
          <button className="button">Register</button>
        </form>
        <p className="text-center">Already a member?</p>
        <Link href="/login" className="text-sky-500 hover:underline">
          Login now
        </Link>
      </div>
    </div>
  );
};
export default Page;
