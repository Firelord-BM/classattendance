import Layout from "../components/landing/Layout";
import  Leaderboard from "../components/landing/Leaderboard";
import Link from "next/link";
import LeaderBoard from "../components/landing/LeaderBoard";

export default function Home() {
  return (
    <div>
      <Layout>
        <span className="md:w-full w-1/2 flex flex-col justify-center items-center  p-4">
          <div className="md:w-4/5 w-full">
            <h1 className="text-green-400 font-bold text-4xl">
              Class Attendance system
            </h1>
            <br />
            <br />

            <p>
              Welcome to our new class attendance system management! This system
              has been designed to help our school keep track of student
              attendance and ensure that all students are present and accounted
              for during class time.
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
        {/* <Leaderboard/> */}
      </Layout>
<<<<<<< HEAD
      <LeaderBoard />
    </div>
=======
      
      
    </>
>>>>>>> api route
  );
}
