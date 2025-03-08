import React from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import "./Dash.css"; // Import CSS file

function Dash() {
  const navigate = useNavigate(); // Hook to navigate

  return (
    <div className="home-container">
      <h1>📊 Welcome to Mark Calculators</h1>
      <p>Select an option below:</p>

      <div className="button-group">
        <button className="cta-button" onClick={() => navigate("/twelve")}>
          See Your 12th Mark Percentage → Click Now
        </button>

        <button className="cta-button" onClick={() => navigate("/cutoff")}>
          See Your 12th CutOff Mark → Click Now
        </button>

        <button className="cta-button" onClick={() => navigate("/ten")}>
          See Your 10th Mark Percentage → Click Now
        </button>
      </div>
      <footer>
    <p>© 2024 Created by <strong>Santhosh D</strong>. All rights reserved.</p>
</footer>

    </div>
  );
}

export default Dash;
