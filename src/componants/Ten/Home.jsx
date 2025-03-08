import { useState, useEffect } from "react";
import Confetti from "react-confetti"; 
import "./Home.css"; 

function App() {
  const [marks, setMarks] = useState({
    tamil: "",
    english: "",
    maths: "",
    physics: "",
    chemistry: "",
    elective: "",
  });

  const [result, setResult] = useState(null);
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleChange = (e) => {
    setMarks({ ...marks, [e.target.name]: e.target.value });
  };

  const calculatePercentage = () => {
    const subjects = Object.values(marks).map((mark) => parseInt(mark) || 0);
    const totalMarks = subjects.reduce((acc, mark) => acc + mark, 0);
    const percentage = (totalMarks / 600) * 100;
    const isPass = subjects.every((mark) => mark >= 35);
    const status = isPass ? "Pass" : "Fail";

    setResult({
      total_marks: totalMarks,
      percentage: percentage.toFixed(2),
      status: status,
    });
  };

 
  const clearFields = () => {
    setMarks({
      tamil: "",
      english: "",
      maths: "",
      physics: "",
      chemistry: "",
      elective: "",
    });
    setResult(null);
  };

  return (
    <div className="over-home">
      {result?.status === "Pass" && (
        <Confetti width={windowSize.width} height={windowSize.height} numberOfPieces={300} />
      )}
      <h1>🎓 12th Mark Calculator</h1>
      <div className="container">
        
        <h2>📊 TN Board 12th Mark Percentage Calculator</h2>

        <div className="form">
          {["tamil", "english", "maths", "physics", "chemistry", "elective"].map((subject) => (
            <input
              key={subject}
              name={subject}
              type="text" 
              placeholder={subject.toUpperCase()}
              value={marks[subject]}
              onChange={handleChange}
              maxLength="2" 
              onWheel={(e) => e.target.blur()} 
            />
          ))}
          <button onClick={calculatePercentage}>Calculate</button>
          {result && <button className="clear-btn" onClick={clearFields}>Clear</button>}
        </div>

        {result && (
          <div className="result">
            <h3>Total Marks: <span>{result.total_marks}</span></h3>
            <h3>Percentage: <span>{result.percentage}%</span></h3>
            <h3 className={result.status === "Pass" ? "pass" : "fail"}>
              Status: <span>{result.status}</span>
            </h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
