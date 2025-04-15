const Total = ({ parts }) => {
  const totalExercises = parts.reduce(
    (sum, currentPart) => sum + currentPart.exercises,
    0
  );

  return <strong>total of {totalExercises} exercises</strong>;
};

export default Total;
