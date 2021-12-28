import { useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(0);

  const changeButton = (value, text) => {
    return <button onClick={() => setValue(value)}>{text}</button>;
  };

  return (
    <div>
      <p>
        현재 카운터 값은 <b>{value}</b>입니다.
      </p>
      {changeButton(value + 1, "+1")}
      {changeButton(value - 1, "-1")}
    </div>
  );
};

export default Counter;
