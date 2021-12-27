import MyComponent from "./MyComponents";
import Say from "./Say";
import EventPractice from "./EventPractice";
import IterationSample from "./iterationSample";

const App = () => {
  return (
    <div>
      <MyComponent name="Gopher">리액트</MyComponent>
      <Say />
      <EventPractice />
      <IterationSample />
    </div>
  );
};

export default App;
