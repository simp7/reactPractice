import MyComponent from "./MyComponents";
import Say from "./Say";
import EventPractice from "./EventPractice";
import IterationSample from "./iterationSample";
import Counter from "./Counter";
import Counter2 from "./Counter2";
import Info from "./Info";
import Average from "./Average";
import StyledComponent from "./StyledComponent";

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
      <StyledComponent />
    </div>
  );
};

export default App;
