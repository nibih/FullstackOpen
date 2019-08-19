import React from "react";
import ReactDOM from "react-dom";

const Header = props => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
};
const Parts = props => {
  const parts = [
    "Fundamentals of React",
    "Using props to pass data",
    "State of a component"
  ];

  var exercises = [10, 7, 14];
  return (
    <p>
      {parts[props.index]} {exercises[props.index]}
    </p>
  );
};

const Content = () => {
  return (
    <div>
      <Parts index={0} />
      <Parts index={1} />
      <Parts index={2} />
    </div>
  );
};

const Total = props => {
  var exercises = [10, 7, 14];
  if (props.new > 0) {
    exercises.push(props.new);
  }
  var total = 0;
  for (var i = 0; i < exercises.length; i++) {
    total += exercises[i];
  }
  return <p>Number of exercises {total}</p>;
};

const App = () => {
  const course = "Half Stack application development";

  return (
    <div>
      <Header course={course} />
      <Content />
      <Total />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
