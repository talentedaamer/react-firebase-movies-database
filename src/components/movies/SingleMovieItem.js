import React, { Component } from "react";

import { Link } from "react-router-dom";

import {
  Heading,
  Paragraph,
  Badge,
  Strong,
  Button,
  //   toaster,
  Dialog
} from "evergreen-ui";

class SingleMovieItem extends Component {

  constructor(props) {
    super(props);
    this.state = { isShown: false };
  }

  delete() {
    this.setState({ isShown: true });

    // this.props.history.push("/");

    // toaster.success("Success!", {
    //   description: 'Movie Item "Key-123" was deleted successfully'
    // });

    // toaster.danger("Error!", {
    //   description: 'Could not delete Movie Item "Key-123"'
    // });
  }

  render() {
    const { movie } = this.props;
    const key = "dummy-key";

    let stars;
    if ( typeof movie.stars !== 'undefined' && movie.stars.length > 0 ) {
        stars = movie.stars.join(", ");
    }

    return (
      <div>
        <Dialog
          isShown={this.state.isShown}
          title="Confirm Delete"
          onCloseComplete={() => this.setState({ isShown: false })}
          confirmLabel="Delete">
          Are you sure you want to delete movie item "Key-23wr"
        </Dialog>

        <Heading size={500} marginBottom={10}>
          {movie.name}
          { movie.type !== undefined ? (
          <Badge marginLeft={5} color="blue" isSolid>
            {movie.type}
          </Badge>
          ) : ''}
        </Heading>
        <Paragraph size={500}>
          { movie.director !== undefined ? (
            <Strong>Director : {movie.director}</Strong>
          ) : '' }
        </Paragraph>
        <Paragraph size={500} marginBottom={10}>
        { stars !== undefined ? (
            <Strong>Cast : {stars}</Strong>
          ) : '' }
        </Paragraph>
        <Paragraph size={500} marginBottom={10}>
          {movie.description}
        </Paragraph>

        <Paragraph>
          <Link to={`/edit/${key}`}>
            <Button marginRight={10} iconBefore="edit">
              Edit
            </Button>
          </Link>

          <Button
            onClick={this.delete.bind(this, "dummy-key")}
            intent="danger"
            iconBefore="edit"
          >
            Delete
          </Button>
        </Paragraph>
      </div>
    );
  }
}

export default SingleMovieItem;
