import { Component } from "react";

// Complete the AnimeCard Component
class AnimeCard extends Component {
  render() {
    // let { name, image } = this.props;
    return (
      <div className="anime-card" role="img">
        <img src={this.props.image} alt={this.props.name} />
        <p>{this.props.name}</p>
      </div>
    );
  }
}

export default AnimeCard;
