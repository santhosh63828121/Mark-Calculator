import { useState } from "react";
import Confetti from "react-confetti";
import "./Cut.css"; 

function App() {
  const [marks, setMarks] = useState({
    maths: "",
    physics: "",
    chemistry: "",
    biology: "",
  });
  const [cutoff, setCutoff] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleChange = (e) => {
    let value = e.target.value;
    
    // Allow only numbers between 0 to 100
    if (/^\d{1,2}$|^100$/.test(value) || value === "") {
      setMarks({ ...marks, [e.target.name]: value });
    }
  };

  const calculateCutoff = () => {
    const { maths, physics, chemistry, biology } = marks;

    // Convert input values to numbers
    const m = parseInt(maths) || 0;
    const p = parseInt(physics) || 0;
    const c = parseInt(chemistry) || 0;
    const b = parseInt(biology) || 0;

    // Engineering Cutoff Formula
    const engCutoff = (m / 2) + (p / 4) + (c / 4);
    
    // Medical Cutoff Formula
    const medCutoff = (b / 2) + (p / 4) + (c / 4);

    setCutoff({ engineering: engCutoff.toFixed(2), medical: medCutoff.toFixed(2) });

    // Show Confetti if cutoff is above 190
    if (engCutoff > 190 || medCutoff > 190) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 5000);
    }
  };

  const clearFields = () => {
    setMarks({ maths: "", physics: "", chemistry: "", biology: "" });
    setCutoff(null);
    setShowConfetti(false);
  };

  return (
    <div className="home-container">
      {showConfetti && <Confetti />}
      
      <h1>🎯 TN 12th Cutoff Calculator</h1>
      <p>Calculate your Engineering & Medical Cutoff</p>

      <div className="form">
        <input name="maths" type="number" placeholder="Maths" value={marks.maths} onChange={handleChange} />
        <input name="physics" type="number" placeholder="Physics" value={marks.physics} onChange={handleChange} />
        <input name="chemistry" type="number" placeholder="Chemistry" value={marks.chemistry} onChange={handleChange} />
        <input name="biology" type="number" placeholder="Biology (For Medical)" value={marks.biology} onChange={handleChange} />
        <button onClick={calculateCutoff}>Calculate</button>
        {cutoff && <button className="clear-btn" onClick={clearFields}>Clear</button>}
      </div>

      {cutoff && (
        <div className="result">
          <h3>🏗 Engineering Cutoff: <span>{cutoff.engineering}</span></h3>
          <h3>🩺 Medical Cutoff: <span>{cutoff.medical}</span></h3>
        </div>
      )}
    </div>
  );
}

export default App;
