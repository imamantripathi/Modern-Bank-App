import React from "react";
import styles from "../style";

const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-primary text-[18px] outline-none ${styles} `}
    >
      Get Started
    </button>
  );
};

export default Button;
