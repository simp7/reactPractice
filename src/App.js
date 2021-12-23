import MyComponent from "./MyComponents";
import Say from "./Say";

const App = () => {
  return (
    <div>
      <MyComponent name="Gopher">리액트</MyComponent>
      <Say />
    </div>
  );
};

export default App;
