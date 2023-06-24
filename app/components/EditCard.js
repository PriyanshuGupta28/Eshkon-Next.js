"use client";
import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

const EditCard = ({ initialCardData, onSave }) => {
  const [cardData, setCardData] = useState(initialCardData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCardData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    onSave(cardData);
    setCardData({
      thumbnail: "",
      title: "",
      description: "",
      callToAction: "",
    });
  };

  return (
    <div>
      <h3>Edit Card</h3>
      <form onSubmit={handleSave} className="card-form">
        {/* Form inputs for updating the card details */}
        <input
          className="input-field"
          type="text"
          name="thumbnail"
          placeholder="Image URL"
          value={cardData.thumbnail}
          onChange={handleChange}
        />
        <input
          className="input-field"
          type="text"
          name="title"
          placeholder="Title"
          value={cardData.title}
          onChange={handleChange}
        />
        <input
          className="input-field"
          type="text"
          name="description"
          placeholder="Description"
          value={cardData.description}
          onChange={handleChange}
        />
        <input
          className="input-field"
          type="number"
          placeholder="Call to Action"
          value={cardData.callToAction}
          name="callToAction"
          onChange={handleChange}
        />
        <motion.button
          type="submit"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="update-button"
        >
          Update Card
        </motion.button>
      </form>
    </div>
  );
};

export default EditCard;
