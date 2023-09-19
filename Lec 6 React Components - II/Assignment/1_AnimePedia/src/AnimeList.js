import { Component } from "react";
import AnimeCard from "./AnimeCard";

// Complete the AnimeList Component
class AnimeList extends Component {
  render() {
    return (
      <div className="anime-list">
        {this.props.anime.map((currAnime, i) => {
          return (
            <AnimeCard name={currAnime.name} image={currAnime.image} key={i} />
          );
        })}
      </div>
    );
  }
}

export default AnimeList;
