import React from "react";
import "./PageStyle.css";

function About() {
  return (
    <div className="page-container">
      <h1>ℹ️ About CryptoDash</h1>
      <p>
        <b>CryptoDash</b> is a live dashboard built with React that tracks
        real-time prices of major cryptocurrencies and gold using the CoinGecko API.
      </p>
      <p>
        It automatically updates every 30 seconds, giving you an accurate
        overview of the market at any time.
      </p>
      <p>
        This project was created as part of an advanced web development course
        to demonstrate modern front-end technologies and API integration.
      </p>
    </div>
  );
}

export default About;   // 👈 VERY IMPORTANT
