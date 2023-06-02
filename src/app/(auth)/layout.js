import "../globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import { RxCaretLeft } from "react-icons/rx";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Workaholic",
  description: "Login/Registration Page",
};

export default function AuthLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-y-auto`}>
        <Link
          href="/"
          alt="Go to landing page"
          className="flex items-center ml-[30%] mt-12 hover:underline"
        >
          <RxCaretLeft size={45} />
          <h1 className="text-lg">Home</h1>
        </Link>
        {children}
      </body>
    </html>
  );
}
