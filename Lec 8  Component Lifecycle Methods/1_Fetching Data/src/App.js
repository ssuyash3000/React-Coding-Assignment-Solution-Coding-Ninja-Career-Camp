import "./styles.css";
import React from "react";
import Image from "./components/Image";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      loading: false,
    };
  }

  // Use the required lifecycle methods here
  componentDidMount() {
    let fetchData = async () => {
      const data = await fetch(
        "https://jsonplaceholder.typicode.com/albums/1/photos"
      );
      let dataArray = await data.json();
      //console.log(dataArray);
      this.setState({
        photos: dataArray,
        loading: true,
      });
    };
    fetchData();
  }

  render() {
    // Display loading status here
    return (
      <div className="App">
        {this.state.loading === false ? (
          <div>Loading...</div>
        ) : (
          this.state.photos.map((photo) => {
            return <Image key={photo.id} photo={photo} />;
          })
        )}
      </div>
    );
  }
}
