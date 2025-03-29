import React from "react";
import { Navbar1 } from "./components/Navbar1";
import { Header30 } from "./components/Header30";
import { Layout480 } from "./components/Layout480";
import { Layout241 } from "./components/Layout241";
import { Contact20 } from "./components/Contact20";
import { Footer3 } from "./components/Footer3";
import { Testimonial18 } from "./components/Testimonial18";

export default function Home() { 
  return (
    <div>
      <Navbar1 />
      <Header30 />
      <Layout480 />
      <Layout241 />
      <Testimonial18/>
      <Contact20 />
      <Footer3 />
    </div>
  );
}
