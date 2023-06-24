// components/Profile.js
import React, { useContext } from "react";
import { MyContext } from "./MyContext";
import styles from "./profile.css";
import { motion } from "framer-motion";

const Profile = () => {
  const { data } = useContext(MyContext);
  return (
    <div className="left-column">
      <h1 className="welcome-text">Welcome, {data.name}!</h1>
      <motion.img
        className="user-avatar"
        src={data.avatar}
        alt="User Avatar"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      />
      <p className="user-name">{data.name}</p>
      <p className="user-info">City: {data.city}</p>
      <p className="user-info">Country: {data.country}</p>
    </div>
  );
};

export default Profile;
