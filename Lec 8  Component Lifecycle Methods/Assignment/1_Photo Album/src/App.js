import React from "react";
import ImageList from "./components/ImageList";
import "./styles.css";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      images: [],
      imageUrl: "",
    };
  }

  // Function to add image to local storage
  addImageToLS = () => {
    localStorage.setItem(
      "images",
      JSON.stringify([...this.state.images, this.state.imageUrl])
    );
  };

  // Function to get images from the local storage
  getImagesFromLS = () => {
    const images = localStorage.getItem("images");
    if (!images) {
      localStorage.setItem("images", []);
      return [];
    }
    return JSON.parse(images);
  };

  onAddImage = (e) => {
    e.preventDefault();

    this.setState((prevState) => {
      prevState.images.push(prevState.imageUrl);
      return { images: prevState.images, imageUrl: "" };
    });
    this.addImageToLS();
  };

  // Create function to set image url
  setImageUrl = (e) => {
    this.setState({ imageUrl: e.target.value });
  };
  // Use appropriate lifecycle method to get images
  componentDidMount() {
    this.setState({ images: this.getImagesFromLS() });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Component Did Update Called");
    if (
      JSON.stringify(prevState.images) !== JSON.stringify(this.state.images)
    ) {
      this.setState({ images: this.getImagesFromLS() });
    }
  }

  render() {
    return (
      <>
        <form onSubmit={this.onAddImage}>
          <input
            type="text"
            placeholder="Image URL"
            value={this.state.imageUrl}
            onChange={this.setImageUrl}
          />
          <button>Add Image</button>
        </form>
        <ImageList images={this.state.images} />
      </>
    );
  }
}
