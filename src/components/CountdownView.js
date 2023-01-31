import React from "react";
// Function Component Start Here
const CountdownView = ({ message, secondsLeft, timer }) => {
  if (secondsLeft === 0) {
      clearInterval(timer);
      message="Time To Rest Now ! Please ShutDown The Computer."
  }
  return (
    <div style={{ backgroundColor: "#FFFFFF", margin: "0 20px 0 20px" }}>
      <span>{message ? message : "Time left: " + secondsLeft}</span>
    </div>
  );
};

export default CountdownView;
// Function Component End Here by Default export