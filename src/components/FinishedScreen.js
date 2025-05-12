function FinishedScreen({ points, maxPossiblePonts, highscore, dispatch }) {
  const percentage = (points / maxPossiblePonts) * 100;

  let emoji;
  if (percentage === 100) {
    emoji = "🥳";
  } else if (percentage >= 80 && percentage < 100) {
    emoji = "😎";
  } else if (percentage >= 50 && percentage < 80) {
    emoji = "😐";
  } else {
    emoji = "😢";
  }
  return (
    <>
      <p className="result">
        <span>{emoji}</span> You scored <strong>{points}</strong> out of{" "}
        {maxPossiblePonts} points. ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
}

export default FinishedScreen;
