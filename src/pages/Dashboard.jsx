import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Dashboard.css";

function Dashboard() {
  const [cryptoData, setCryptoData] = useState([]);
  const [error, setError] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);

  const fetchData = async () => {
    try {
      const res = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets",
        {
          params: {
            vs_currency: "usd",
            ids: "bitcoin,ethereum,cardano,solana,tether-gold",
          },
        }
      );

      const updatedData = res.data.map((item) => {
        if (item.id === "tether-gold") item.name = "Gold (XAU)";
        return item;
      });

      setCryptoData(updatedData);
      setError(null);
      setLastUpdated(new Date().toLocaleTimeString());
    } catch (err) {
      console.error("⚠️ API Error:", err.message);
      setError("Failed to load market data ❌");
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dashboard-container">
      <h2>💹 Live Crypto & Gold Prices</h2>
      {lastUpdated && (
        <p className="update-time">⏱️ Last updated: {lastUpdated}</p>
      )}

      {error && <p style={{ color: "red", marginTop: "15px" }}>{error}</p>}

      {cryptoData.length > 0 && !error ? (
        <table className="crypto-table">
          <thead>
            <tr>
              <th>Asset</th>
              <th>Price (USD)</th>
              <th>24h Change</th>
            </tr>
          </thead>
          <tbody>
            {cryptoData.map((coin) => (
              <tr key={coin.id}>
                <td className="align-center">
                  {coin.image && (
                    <img
                      src={coin.image}
                      alt={coin.name}
                      width="25"
                      className="coin-icon"
                    />
                  )}
                  {coin.name}
                </td>
                <td className="align-center">
                  ${coin.current_price.toLocaleString()}
                </td>
                <td
                  className="align-center"
                  style={{
                    color:
                      coin.price_change_percentage_24h > 0
                        ? "lime"
                        : coin.price_change_percentage_24h < 0
                        ? "red"
                        : "gray",
                  }}
                >
                  {coin.price_change_percentage_24h === null
                    ? "—"
                    : `${coin.price_change_percentage_24h.toFixed(2)}%`}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        !error && <p style={{ marginTop: "20px" }}>Loading market data...</p>
      )}
    </div>
  );
}

export default Dashboard;
