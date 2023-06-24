// components/Card.js
import React from "react";
import { motion } from "framer-motion";

const Card = ({ thumbnail, title, description, callToAction }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="card"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Thumbnail: -{" "}
        {/* Renders the card image, title, description, and call to action */}
        <motion.img
          src={thumbnail}
          alt="Card Image"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="card-image"
        />
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Title: - {title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="card-description"
        >
          Description: - {description}
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="card-button"
        >
          Call: - {callToAction}
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Card;
