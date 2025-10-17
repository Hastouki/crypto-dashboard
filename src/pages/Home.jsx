import React from "react";
import "./Home.css";
import homepage from "../assets/homepage.png"; // ✅ direct import

function Home() {
  return (
    <div
      className="home-container"
      style={{
        backgroundImage: `url(${homepage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "#fff",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <div className="overlay">
        <h1>
          💰 Welcome to <span>CryptoDash</span>
        </h1>
        <p>
          Track live <b>Crypto</b> & <b>Gold</b> prices with style and precision.
        </p>
        <p className="quote">“Your journey to financial power starts here.”</p>
      </div>
    </div>
  );
}

export default Home;
