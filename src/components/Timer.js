import { useEffect } from "react";

function Timer({ dispatch, secondsRemaining }) {
  const mins = Math.floor(secondsRemaining / 60);
  const secs = secondsRemaining % 60;
  const displayMins = mins < 10 ? `0${mins}` : mins;
  const displaySecs = secs < 10 ? `0${secs}` : secs;
  const display = `${displayMins}:${displaySecs}`;

  useEffect(() => {
    const timer = setInterval(() => {
      // Timer logic here
      dispatch({ type: "tick" });
    }, 1000);

    return () => clearInterval(timer);
  }, [dispatch]);
  return <div className="timer">{display}</div>;
}

export default Timer;
