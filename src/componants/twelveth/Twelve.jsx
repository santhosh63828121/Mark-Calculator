// import { useState } from "react";
// import "./Twelve.css"; 

// function App() {
//   const [marks, setMarks] = useState({
//     tamil: "",
//     english: "",
//     maths: "",
//     science: "",
//     social: "",
//   });
//   const [result, setResult] = useState(null);

//   const handleChange = (e) => {
//     setMarks({ ...marks, [e.target.name]: e.target.value });
//   };

//   const calculatePercentage = () => {
//     // Convert inputs to numbers and calculate total marks
//     const subjects = Object.values(marks).map((mark) => parseInt(mark) || 0);
//     const totalMarks = subjects.reduce((acc, mark) => acc + mark, 0);
//     const percentage = (totalMarks / 500) * 100;

//     // Check if the student passed each subject
//     const isPass = subjects.every((mark) => mark >= 35);
//     const status = isPass ? "Pass" : "Fail";

//     // Set result state
//     setResult({
//       total_marks: totalMarks,
//       percentage: percentage.toFixed(2),
//       status: status,
//     });
//   };

//   return (
//     <div className="over">
//         <h1>10Th Mark Percentage</h1>
//     <div className="container">
//       <h2>📊 Tamil Nadu 10th Mark Calculator</h2>
//       <div className="form">
//         {["tamil", "english", "maths", "science", "social"].map((subject) => (
//           <input
//             key={subject}
//             name={subject}
//             type="number"
//             placeholder={subject.toUpperCase()}
//             value={marks[subject]}
//             onChange={handleChange}
//             min="0"
//             max="100"
//           />
//         ))}
//         <button onClick={calculatePercentage}>Calculate</button>
//       </div>
//       {result && (
//         <div className="result">
//           <h3>Total Marks: <span>{result.total_marks}</span></h3>
//           <h3>Percentage: <span>{result.percentage}%</span></h3>
//           <h3 className={result.status === "Pass" ? "pass" : "fail"}>
//             Status: <span>{result.status}</span>
//           </h3>
//         </div>
//       )}
//     </div>
//     </div>
//   );
// }

// export default App;
import { useState, useEffect } from "react";
import Confetti from "react-confetti"; 
import "./Twelve.css"; 

function Twelve() {
  const [marks, setMarks] = useState({
    tamil: "",
    english: "",
    maths: "",
    science: "",
    social: "",
  });
  const [result, setResult] = useState(null);
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    // Update window size dynamically for Confetti animation
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
    const percentage = (totalMarks / 500) * 100;
    const isPass = subjects.every((mark) => mark >= 35);
    const status = isPass ? "Pass" : "Fail";

    setResult({
      total_marks: totalMarks,
      percentage: percentage.toFixed(2),
      status: status,
    });
  };

  return (
    <div className="over1">
      {result?.status === "Pass" && (
        <Confetti width={windowSize.width} height={windowSize.height} numberOfPieces={300} /> 
      )}
       <h1>10Th Mark Percentage</h1>
      <div className="container">
        <h2>📊 TN Board 10th Mark Calculator</h2>
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

export default Twelve;

