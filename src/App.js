const Header = props => <>{props.course}</>;

const Content = props => (
   <>
      <p>
         {props.part1} {props.exercises1}{" "}
      </p>
      <p>
         {props.part2} {props.exercises2}{" "}
      </p>
      <p>
         {props.part3} {props.exercises3}{" "}
      </p>
   </>
);

const Total = props => (
   <p>
      Number of exercises is{" "}
      {props.exercises1 + props.exercises2 + props.exercises3}
   </p>
);

const App = () => {
   const course = "Half Stack application development";
   const part1 = "Fundamentals of React";
   const exercises1 = 10;
   const part2 = "Using props to pass data";
   const exercises2 = 7;
   const part3 = "State of a component";
   const exercises3 = 14;

   return (
      <div>
         <h1>
            <Header course={course} />
         </h1>
         <Content
            part1={part1}
            exercises1={exercises1}
            part2={part2}
            exercises2={exercises2}
            part3={part3}
            exercises3={exercises3}
         />
         <Total
            exercises1={exercises1}
            exercises2={exercises2}
            exercises3={exercises3}
         />
      </div>
   );
};

export default App;
