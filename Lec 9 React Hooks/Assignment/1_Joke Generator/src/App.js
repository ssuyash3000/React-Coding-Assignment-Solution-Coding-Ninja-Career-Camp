import "./styles.css";
import useFetch from "./useFetch";
// import the custom hook to use in this document
export default function App() {
  const url = "https://v2.jokeapi.dev/joke/Programming?type=single";
  // Use the custom hook here
  let [data, jokeReloader] = useFetch(url);
  const handleClick = () => {
    jokeReloader((prevData) => !prevData);
  };
  // Display loading text here
  if (data.status === "Loading...") {
    return <div className="App">Loading...</div>;
  }
  // Display something went wrong here
  if (data.status === "Something went wrong") {
    return (
      <div className="App">
        <h1>Joke Generator</h1>
        Something went wrong
        <button onClick={handleClick} className="btn">
          New Joke
        </button>
      </div>
    );
  }

  return (
    <div className="App">
      <h1>Joke Generator</h1>
      {/* Do not modify the below code */}
      <h2>{data.joke}</h2>
      <button onClick={handleClick} className="btn">
        New Joke
      </button>
    </div>
  );
}
