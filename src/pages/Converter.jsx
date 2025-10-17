import React, { useState } from "react";
import "./PageStyle.css";

function Converter() {
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("btc");
  const [result, setResult] = useState(null);

  const handleConvert = () => {
    if (!amount || isNaN(amount)) {
      setResult("Please enter a valid number");
      return;
    }

    // Placeholder logic for now
    const rates = {
      usd: { btc: 1 / 100000, eth: 1 / 3000, xau: 1 / 2000 },
      btc: { usd: 100000 },
      eth: { usd: 3000 },
      xau: { usd: 2000 },
    };

    const conversion =
      rates[from] && rates[from][to]
        ? (amount * rates[from][to]).toFixed(4)
        : "Conversion not available";

    setResult(`${amount} ${from.toUpperCase()} = ${conversion} ${to.toUpperCase()}`);
  };

  return (
    <div className="page-container">
      <h1>💱 Currency Converter</h1>
      <p>Convert between USD, Bitcoin (BTC), Ethereum (ETH), and Gold (XAU).</p>

      <div className="converter-box">
        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <div className="select-row">
          <select value={from} onChange={(e) => setFrom(e.target.value)}>
            <option value="usd">USD</option>
            <option value="btc">BTC</option>
            <option value="eth">ETH</option>
            <option value="xau">Gold (XAU)</option>
          </select>

          <span className="arrow">➡️</span>

          <select value={to} onChange={(e) => setTo(e.target.value)}>
            <option value="usd">USD</option>
            <option value="btc">BTC</option>
            <option value="eth">ETH</option>
            <option value="xau">Gold (XAU)</option>
          </select>
        </div>

        <button onClick={handleConvert}>Convert</button>

        {result && <p className="result">{result}</p>}
      </div>
    </div>
  );
}

export default Converter;
