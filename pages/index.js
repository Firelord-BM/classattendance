import Layout from "../components/landing/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Layout>
        <span className="md:w-full w-1/2 flex flex-col justify-center items-center  p-4">
          <div className="md:w-4/5 w-full">
            <h1 className="text-green-400 font-bold text-4xl">
              Class Attendance
            </h1>
            <br />
            <br />

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptatum at dolorum quam, dolores deserunt nisi eos earum,
              ipsam, explicabo fuga suscipit consequuntur iste nam doloremque
              nobis. Provident quo libero dignissimos!
            </p>
            <br />
            <br />
            <Link href="/students">
              <button>Login</button>
            </Link>
          </div>
        </span>
        <span
          id="right"
          className="md:w-full w-1/2 flex flex-col items-center bg-green-400/10"
        ></span>
      </Layout>
    </>
  );
}
