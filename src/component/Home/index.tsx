import React from "react";
// import { motion } from "framer-motion";
import { Mobile } from "../responsiveness";
import Header from "../landing/Header";
import Bag from "../landing/category/Bag";

const HomePage = () => {
  return (
    <div>
      <Mobile>
        <Header />
        <Bag />
      </Mobile>
    </div>
  );
};
export default HomePage;
