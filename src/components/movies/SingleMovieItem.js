import React, { Component } from "react";

import { Heading, Paragraph, Badge, Strong, Button } from "evergreen-ui";

class SingleMovieItem extends Component {
  render() {
    const { movie } = this.props;
    console.log(movie);

    return (
      <div>
        <Heading size={500} marginBottom={10}>
          {movie.name}
          <Badge marginLeft={5} color="blue" isSolid>
            {movie.type}
          </Badge>
        </Heading>
        <Paragraph size={500}>
          <Strong>Director : {movie.director}</Strong>
        </Paragraph>
        <Paragraph size={500} marginBottom={10}>
          <Strong>Cast : {movie.stars.join(", ")}</Strong>
        </Paragraph>
        <Paragraph size={500} marginBottom={10}>
          {movie.description}
        </Paragraph>

        <Paragraph>
          <Button marginRight={10} iconBefore="edit">
            Edit
          </Button>
          <Button intent="danger" iconBefore="edit">
            Delete
          </Button>
        </Paragraph>
      </div>
    );
  }
}

export default SingleMovieItem;
