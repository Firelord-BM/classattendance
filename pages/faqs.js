import React from "react";
import Nav from "../components/landing/Nav";
import Footer from "../components/landing/Footer";
import Hero from "../components/landing/Hero";
import Meta from "../components/Meta";
import Faq from "../components/landing/Faq";
import About2 from "../components/landing/About2";

export default function FaqsPage() {
  return (
    <div>
      <Nav />

      <Meta title="Frequently Asked Questions" />
      <Hero />
      <Faq />
      <About2 />
      <Footer />
    </div>
  );
}
