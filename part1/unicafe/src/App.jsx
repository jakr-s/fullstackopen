import { useState } from "react";

const Header = ({ text }) => <h1>{text}</h1>;

const Button = ({ text, onClick }) => <button onClick={onClick}>{text}</button>;

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <th>{text}</th>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ ratings }) => {
  const total = ratings.good + ratings.neutral + ratings.bad;

  const average = (total) => {
    if (total === 0) return 0;
    return (ratings.good * 1 + ratings.neutral * 0 + ratings.bad * -1) / total;
  };

  const positive = (total) => {
    if (total === 0) return 0;
    return (ratings.good / total) * 100 + "%";
  };

  return (
    <>
      {total !== 0 ? (
        <table>
          <tbody>
            <StatisticLine text="good" value={ratings.good} />
            <StatisticLine text="neutral" value={ratings.neutral} />
            <StatisticLine text="bad" value={ratings.bad} />
            <StatisticLine text="all" value={total} />
            <StatisticLine text="average" value={average(total)} />
            <StatisticLine text="positive" value={positive(total)} />
          </tbody>
        </table>
      ) : (
        <p>No feedback given</p>
      )}
    </>
  );
};

const App = () => {
  const [ratings, setRating] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const addFeedback = (feedback) => {
    setRating({
      ...ratings,
      [feedback]: ratings[feedback] + 1,
    });
  };

  return (
    <>
      <Header text="give feedback" />

      <Button
        text="good"
        onClick={() => {
          addFeedback("good");
        }}
      />
      <Button
        text="neutral"
        onClick={() => {
          addFeedback("neutral");
        }}
      />
      <Button
        text="bad"
        onClick={() => {
          addFeedback("bad");
        }}
      />

      <Header text="statistics" />

      <Statistics ratings={ratings} />
    </>
  );
};

export default App;
