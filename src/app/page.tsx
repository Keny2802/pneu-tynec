import {
  Fragment
} from "react";

import Header from "./components/Header";
import Hero from "./sections/Hero";

const Page = () => {
  return (
    <Fragment>
        <Header />
        <Hero />
    </Fragment>
  );
};

export default Page;