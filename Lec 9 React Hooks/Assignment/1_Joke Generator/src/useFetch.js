import { useEffect, useState } from "react";

// Complete the following hook
const useFetch = (url) => {
  let [state, setState] = useState({ status: "", joke: "" });
  let [reload, jokeReloader] = useState(false);
  const getJoke = async () => {
    try {
      setState({ status: "Loading..." });
      const response = await fetch(url);
      if (!response.ok) {
        // throw new Error(`HTTP error! Status: ${response.status}`);
        setState({ status: "Something went wrong" });
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      // Now you can use the 'data' variable
      setState({ status: "", joke: data.joke });
    } catch (error) {
      // Handle the error here, you can log it or perform any other error-handling logic
      console.error(error);
    }
  };
  // getJoke();
  // useEffect(() => {
  //   getJoke();
  // }, []);
  useEffect(() => {
    getJoke();
    console.log("Hello");
  }, [reload]);

  //It should return data returned from fetch, loading, error and getJoke
  return [state, jokeReloader];
};
// export the useFetch hook as a default export
export default useFetch;
