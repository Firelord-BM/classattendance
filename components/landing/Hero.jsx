import Link from "next/link";
import { useRouter } from "next/router";

export default function Hero() {
  const router = useRouter();

  return (
    <div className="relative pt-20 h-[60vh] w-full bg-black/20 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute h-full inset-0 bg-black z-0 top-0"
        aria-hidden="true"
      >
        <img src="/students.jpg" alt="" className="w-full h-full opacity-30 " />
      </div>
      {/* Text overlay */}
      <div
        data-aos="fade-right"
        className="relative md:w-4/5 w-full mx-auto z-10 h-full flex flex-col justify-center items-start px-4 lg:px-20"
      >
        <div className="text-white   mb-4 flex items-center">
          {router.pathname === "/" ? (
            "Welcome to our website"
          ) : (
            <h3 className="text-4xl ">
              Welcome to our {router.pathname.replace("/", "")} page.
            </h3>
          )}
        </div>
        <p className="text-white  text-center">
          Maximizing attendance, minimizing effort with QR technology.
        </p>
        <br />
        <Link href="/">
          <button>Home</button>
        </Link>{" "}
      </div>
    </div>
  );
}
