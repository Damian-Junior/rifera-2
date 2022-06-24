import React from "react";
// import { motion } from "framer-motion";
import { Mobile } from "../responsiveness";
import Header from "../landing/Header";

const HomePage = () => {
  return (
    <div>
      <Mobile>
        <Header />
      </Mobile>
    </div>
  );
};
export default HomePage;
