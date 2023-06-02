import Image from "next/image";
import Link from "next/link";
import Logo from "@/components/Logo";

export default function Home() {
  return (
    <main className=" m-4 flex flex-col items-start justify-center max-w-full gap-y-2 lg:m-64">
      <nav className="mt-4">
        <Logo />
      </nav>
      <div className="text-2xl flex flex-col items-center mt-52 justify-center gap-y-2 lg:grid lg:mt-8 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col justify-center items-center gap-4 lg:items-start ">
          <h1 className="font-semibold">
            A Job <span className="text-sky-500">Tracking</span> Solution
          </h1>
          <p className="text-center md:text-left">
            Workaholic is a free job tracking app to help you land your dream
            job.
          </p>

          <Link href="/login" className="button">
            Login/Register
          </Link>
        </div>
        <Image
          src="/images/work.jpg"
          alt="Art of man on laptop"
          width={400}
          height={400}
          className="hidden lg:inline-block"
          priority
        />
      </div>
    </main>
  );
}
