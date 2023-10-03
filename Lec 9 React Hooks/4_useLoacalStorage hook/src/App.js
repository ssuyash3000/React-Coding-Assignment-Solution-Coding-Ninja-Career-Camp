import "./styles.css";
import { useRef, useState } from "react";
import useLocalStorage from "./useLocalStorage";

export default function App() {
  // Use the custom local storage hook here

  // const name = useLocalStorage("name", "");
  // const age = useLocalStorage("age", 0);
  const [name, setName] = useLocalStorage("name", "");
  const [age, setAge] = useLocalStorage("age", 0);
  const nameInput = useRef();
  const ageInput = useRef();

  const handleClear = () => {
    nameInput.current.value = "";
    ageInput.current.value = "";
  };

  const handleChange = (e) => {
    e.preventDefault();
    // name.setValue(nameInput.current.value);
    // age.setValue(ageInput.current.value);
    setName(nameInput.current.value);
    setAge(ageInput.current.value);
    handleClear();
  };

  return (
    <div className="App">
      {/* <div id="name">Name - {name.value}</div>
      <div id="age">Age - {age.value}</div> */}
      <div id="name">Name - {name}</div>
      <div id="age">Age - {age}</div>
      <form onSubmit={handleChange}>
        <input placeholder="Name" ref={nameInput} />
        <input placeholder="Age" type="number" min="1" ref={ageInput} />
        <button className="btn">Change</button>
      </form>
    </div>
  );
}
