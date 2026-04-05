import {
  Fragment
} from "react";

import ContactHeader from "./components/ContactHeader";
import Header from "./components/Header";
import Hero from "./sections/Hero";
import Services from "./sections/Services";

const Page = () => {
  return (
    <Fragment>
        <ContactHeader />
        <Header />
        <Hero />
        <Services />
    </Fragment>
  );
};

export default Page;