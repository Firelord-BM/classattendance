import React from "react";
import Nav from "../components/landing/Nav";
import Footer from "../components/landing/Footer";
import Hero from "../components/landing/Hero";
import Meta from "../components/Meta";
import ContactForm from "../components/landing/ContactForm";

export default function contact() {
  return (
    <div>
      <Nav />

      <Meta title="Contact CAS" />
      <Hero />
      <ContactForm />
      <Footer />
    </div>
  );
}
