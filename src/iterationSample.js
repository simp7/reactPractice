import { useState } from "react";

const IterationSample = () => {
  function Item(id, text) {
    this.id = id;
    this.text = text;
  }

  const [namespace, setNames] = useState([
    new Item(1, "눈사람"),
    new Item(2, "얼음"),
    new Item(3, "눈"),
    new Item(4, "바람"),
  ]);

  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5);

  const onChange = (e) => setInputText(e.target.value);
  const onClick = () => {
    const newNamespace = namespace.concat(new Item(nextId, inputText));
    setNames(newNamespace);
    setNextId(nextId + 1);
    console.log(newNamespace);
    setInputText("");
  };

  const onDelete = () => {
    const now = nextId - 1;
    const newNamespace = namespace.filter((name) => name.id !== now);
    setNextId(now);
    console.log(newNamespace);
    setNames(newNamespace);
  };

  const nameList = namespace.map((name) => <li key={name.id}>{name.text}</li>);
  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <button onClick={onDelete}>제거</button>
      <ul>{nameList}</ul>
    </>
  );
};

export default IterationSample;
