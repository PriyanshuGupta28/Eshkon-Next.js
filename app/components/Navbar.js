// components/Navbar.js
import { useRouter } from "next/navigation";
import React from "react";
import { motion } from "framer-motion";
import styles from "./navbar.css";

const Navbar = () => {
  const router = useRouter();
  const handleLogout = () => {
    router.push("/");
  };

  return (
    <nav className="navbar">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="navbar-logo"
      >
        My Website
      </motion.div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleLogout} // Attach the handleLogout function to the button's onClick event
        className="logout-button"
      >
        <motion.span
          initial={{ opacity: 0, rotate: -45, x: -5 }}
          animate={{ opacity: 1, rotate: 0, x: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="bar"
        />
        <motion.span
          initial={{ opacity: 0, rotate: 45, x: 5 }}
          animate={{ opacity: 1, rotate: 0, x: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="bar"
        />
        Logout
      </motion.button>
    </nav>
  );
};

export default Navbar;
