import React, { useState, useEffect } from "react";
import ClockStyles from "~/styles/clock.css";

const ClockComponent = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      tick();
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const tick = () => {
    setTime(new Date());
  };

  return (
    <div>
      <h1>Klockan är</h1>

      <h2>{time.toLocaleTimeString()}</h2>
    </div>
  );
};
export function links() {
  return [{ rel: "stylesheet", href: ClockStyles }];
}

export default ClockComponent;
