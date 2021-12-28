import MyComponent from "./MyComponents";
import Say from "./Say";
import EventPractice from "./EventPractice";
import IterationSample from "./iterationSample";
import Counter from "./Counter";
import Counter2 from "./Counter2";
import Info from "./Info";
import Average from "./Average";

const App = () => {
  return (
    <div>
      <MyComponent name="Gopher">리액트</MyComponent>
      <Say />
      <EventPractice />
      <IterationSample />
      <Counter />
      <Counter2 />
      <Info />
      <Average />
    </div>
  );
};

export default App;
