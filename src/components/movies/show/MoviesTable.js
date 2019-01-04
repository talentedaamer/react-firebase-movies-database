import React, { Component } from "react";

import { Table } from "evergreen-ui";
import MovieItem from './MovieItem';

class MoviesTable extends Component {
  render() {
    const moviesList = this.props.moviesList;

    return (
      <Table>
        <Table.Head>
          <Table.TextHeaderCell>Name</Table.TextHeaderCell>
          <Table.TextHeaderCell>Type</Table.TextHeaderCell>
          <Table.TextHeaderCell>Director</Table.TextHeaderCell>
          <Table.TextHeaderCell>Stars</Table.TextHeaderCell>
          <Table.TextHeaderCell>Description</Table.TextHeaderCell>
          <Table.TextHeaderCell>Action</Table.TextHeaderCell>
        </Table.Head>
        <Table.Body height={240}>
          {moviesList.map(movie => (
            <MovieItem key={movie.key} movie={movie}/>
          ))}
        </Table.Body>
      </Table>
    );
  }
}

export default MoviesTable;
