import React from "react";
import About from "../components/landing/About";
import About2 from "../components/landing/About2";
import Footer from "../components/landing/Footer";
import Hero from "../components/landing/Hero";
import Meta from "../components/Meta";
import Layout from "../components/landing/Layout";
import Link from "next/link";
import Nav from "../components/landing/Nav";

export default function AboutPage() {
  return (
    <div>
      <Nav />

      <Meta title="About CAS" />
      <Hero />
      <About />
      <About2 />
      <Footer />
    </div>
  );
}
