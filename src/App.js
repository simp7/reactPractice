import MyComponent from "./MyComponents";
import Say from "./Say";
import EventPractice from "./EventPractice";

const App = () => {
  return (
    <div>
      <MyComponent name="Gopher">리액트</MyComponent>
      <Say />
      <EventPractice />
    </div>
  );
};

export default App;
