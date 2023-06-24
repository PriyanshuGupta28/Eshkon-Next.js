"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import GoogleLogin from "react-google-login";
import { useContext, useEffect, useState } from "react";
import { gapi } from "gapi-script";
import Profile from "../components/Profile";
import { MyContext } from "../components/MyContext";
import styles from "./login.css";

const LoginPage = () => {
  //   const dispatch = useDispatch();
  const { data, setData } = useContext(MyContext);

  const clientId =
    "927445410653-rlbili14cc87hdhmd7n6mljm3ohtihh0.apps.googleusercontent.com";

  useEffect(() => {
    // Initialize Google API client
    function start() {
      gapi.client.init({
        clientId: clientId, // Set the client ID for authentication
        scope: "", // Set the scope of access permissions (if required)
      });
    }

    // Load the Google API client and start initialization
    gapi.load("client:auth2", start);
  }, []);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  const responseGoogle = (response) => {
    // Extract user information from the Google login response
    const user = {
      name: response.profileObj.name,
      avatar: response.profileObj.imageUrl,
      city: "Example City",
      country: "Example Country",
    };
    setIsLoggedIn(true);
    router.push("/homepage"); // Navigates to the second page
    setData(user);
  };

  const responseGoogleFailure = (response) => {
    console.log("Login failed:", response);
    setIsLoggedIn(false);
    if (response.error === "popup_closed_by_user") {
      console.log("User closed the login popup");
      // Provide feedback to the user that the login process was canceled
    } else {
      // Handle other error cases
    }
  };

  return (
    <div className="login-page">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="login-content"
      >
        <h1 className="login-heading">Please Login To Continue</h1>
        <GoogleLogin
          clientId={clientId} // Google API client ID
          buttonText="Login with Google"
          onSuccess={responseGoogle} // Callback function triggered on successful login
          onFailure={responseGoogleFailure} // Callback function triggered on login failure
          cookiePolicy={"single_host_origin"} // Cookie policy for the login process
        />
      </motion.div>
    </div>
  );
};

export default LoginPage;
