"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import EditCard from "../components/EditCard";
import Card from "../components/Card";
import Profile from "../components/Profile";

import styles from "./homepage.css";

const HomePage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [userProfile, setUserProfile] = useState(null);
  const [cardData, setCardData] = useState({
    thumbnail: "",
    title: "",
    description: "",
    callToAction: "",
  });

  const handleLogin = () => {
    // Add your Google SSO login code here
    // Once login is successful, set isLoggedIn to true and fetch the user profile
    // For example:
    setUserProfile({
      profilePic: "",
      name: "",
      city: "",
      address: "",
    });
    setIsLoggedIn(true);
  };

  const handleSaveCard = (newCardData) => {
    setCardData(newCardData);
  };

  return (
    <div>
      <Navbar />
      {isLoggedIn ? (
        <div className="container">
          <div className="second-page-container">
            <div className="left-column">
              <Profile userProfile={userProfile} />
            </div>
            <div className="right-column">
              <Card
                thumbnail={cardData.thumbnail}
                title={cardData.title}
                description={cardData.description}
                callToAction={cardData.callToAction}
                className="card"
              />
              <EditCard initialCardData={cardData} onSave={handleSaveCard} />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default HomePage;
