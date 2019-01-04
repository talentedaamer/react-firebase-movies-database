import React, { Component } from "react";

import { Link } from 'react-router-dom';

// evergreen ui components
import { Table, IconButton } from "evergreen-ui";

class MovieItem extends Component {

  render() {
    const { movie } = this.props;

    let stars;
    if ( typeof movie.stars !== 'undefined' && movie.stars.length > 0 ) {
        stars = movie.stars.join(", ");
    }

    return (
        <Table.Row key={movie.key}>
        <Table.TextCell>{movie.name}</Table.TextCell>
        <Table.TextCell>{movie.type}</Table.TextCell>
        <Table.TextCell>{movie.director}</Table.TextCell>
        <Table.TextCell>{stars}</Table.TextCell>
        <Table.TextCell>{movie.description}</Table.TextCell>
        <Table.TextCell>
          <Link to={`/movie/${movie.key}`}>
            <IconButton
              appearance="minimal"
              height={24}
              icon="eye-open"
              iconSize={14}
              float="left"
            />
          </Link>
          <Link to={`/edit/${movie.key}`}>
          <IconButton
            appearance="minimal"
            height={24}
            icon="edit"
            iconSize={14}
            float="left"
          />
          </Link>
          <IconButton
            appearance="minimal"
            height={24}
            icon="trash"
            intent="danger"
            iconSize={14}
            float="left"
          />
        </Table.TextCell>
      </Table.Row>
    );
  }
}

export default MovieItem;
