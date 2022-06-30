import React from "react";
import { Mobile } from "../responsiveness";
import Header from "../landing/Header";
import Clothe from "../landing/category/Clothe";
import Footer from "../landing/Footer";

const HomePage = () => {
  return (
    <div>
      <Mobile>
        <Header />
        <Clothe />
        <Footer />
      </Mobile>
    </div>
  );
};
export default HomePage;
