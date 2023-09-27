import React from "react";
import Image from "./Image";

export default class ImageList extends React.Component {
  // Lifecycle method to prevent re render of the list if some spaces are present
  shouldComponentUpdate(nextProps) {
    //console.log(nextProps.images);
    return nextProps.images.some((currentString) => {
      // Check if the string length is greater than 5
      if (currentString === null || currentString === undefined) return true;

      if (currentString.length > 5) {
        // Use the includes method to check for spaces
        return !currentString.includes(" ");
      }
      return false; // String length is not greater than 5
    });
  }

  render() {
    return (
      <div className="image-list">
        {this.props.images.map((image, index) => {
          return <Image key={index} image={image} />;
        })}
      </div>
    );
  }
}
