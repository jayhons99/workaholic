"use client";

import Logo from "@/components/Logo";
import Link from "next/link";

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-32 max-h-screen">
      <h1 className="text-2xl font-semibold">
        <span className="text-sky-500">Login</span> now
      </h1>
      <div className="bg-white min-w-fit min-h-fit p-4 rounded-lg flex flex-col gap-y-4 items-center">
        <form className="flex flex-col gap-y-4">
          <label htmlFor="email" placeholder="Email" className="text-2xl">
            Email:
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter email here"
            className="py-2 indent-2"
          ></input>
          <label htmlFor="password" className="text-2xl">
            Password:
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter password"
            className="py-2 indent-2"
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
