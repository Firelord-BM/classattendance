import Layout from "../components/landing/Layout";
import Link from "next/link";
import LeaderBoard from "../components/landing/LeaderBoard";
import Footer from "../components/landing/Footer";
import Nav from "../components/landing/Nav";
import Meta from "../components/Meta";


export default function Home() {
  return (
    <div>


      <Meta title="welcome to CAS" />
      <Nav />
      <div className="w-full py-40 flex items-center justify-around">
        <div className="lg:w-4/5 w-11/12 flex items-center justify-between md:flex-row flex-col-reverse">
          <span className="md:w-full w-1/2 flex flex-col justify-center items-center  p-4">
            <div className="md:w-4/5 w-full">
              <h1
                data-aos="fade-right"
                className="text-green-400 font-bold text-4xl"
              >
                Class Attendance system
              </h1>
              <br />
              <br />

              <p data-aos="fade-right" data-aos-delay="50">
                Welcome to our new class attendance system management! This
                system has been designed to help our school keep track of
                student attendance and ensure that all students are present and
                accounted for during class time.
              </p>
              <br />
              <br />
              <Link href="/students" data-aos="fade-right" data-aos-delay="100">
                <button>Login</button>
              </Link>
            </div>
          </span>
          <span className="md:w-full w-1/3 flex flex-col items-center ">
            <img
              data-aos="fade-left"
              data-aos-delay="100"
              src="./hero.jpg"
              alt="cas"
              className="w-full"
            />
          </span>
        </div>
      </div>
      <LeaderBoard />
      <Footer />
    </div>
  );
}
