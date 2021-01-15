import { useState, useEffect } from "react";
import React from "react";

const Test = () => {
  const [time, settime] = useState(0);
  useEffect(() => {
    setInterval(() => {
      settime((time) => time + 1);
    }, 1000);
  }, []);

  return (
    <div>
      <h2>compteur:{time}</h2>
    </div>
  );
};

export default Test;
