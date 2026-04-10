import {
  Fragment
} from "react";

import ContactHeader from "./components/ContactHeader";
import Header from "./components/Header";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

const Page = () => {
  return (
    <Fragment>
        <ContactHeader />
        <Header />
        <Hero />
        <Services />
        <About />
        <Contact />
        <Footer />
    </Fragment>
  );
};

export default Page;