import { Component } from "react";
import Course from "./components/Course";
import { courses } from "./data";
import { Container } from "./reusable.styled";
class List extends Component {
  render() {
    return (
      <Container flex="3">
        {courses.map((v) => (
          <Course
            key={v.id}
            video={v}
            onAdd={this.props.handleAddToBag}
            onRemove={this.props.handleRemoveFromBag}
            isInBag={this.props.isCourseinBag(v.id)}
          />
        ))}
      </Container>
    );
  }
}

export default List;
