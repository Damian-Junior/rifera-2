import React from "react";
// import { motion } from "framer-motion";
import { Mobile } from "../responsiveness";
import Header from "../landing/Header";
import Bag from "../landing/category/Bag";
import Clothe from "../landing/category/Clothe";
import Shoe from "../landing/category/Shoe";
import Food from "../landing/category/Food";
import Utensils from "../landing/category/Food";

const HomePage = () => {
  return (
    <div>
      <Mobile>
        <Header />
        <Bag />
        <Shoe />
        <Clothe />
        <Food />
        <Utensils />
      </Mobile>
    </div>
  );
};
export default HomePage;
