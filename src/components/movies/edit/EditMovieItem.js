import React, { Component } from "react";

import {
  Label,
  TextInput,
  Textarea,
  TagInput
} from "evergreen-ui";

class SingleMovieItem extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      name: "",
      description: "",
      director: "",
      type: "",
      stars: []
    }
  }

  onChange = e => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  componentDidMount() {
    const props = this.props;
    // this.setState({
    //   name: movie.name,
    // })
    console.log( 'props', props );
  }

  render() {
    const { name, description, director, type, stars } = this.state;

    return (
      <div>
        <Label htmlFor="name" display="block">
          Movie Name
        </Label>
        <TextInput
          id="name"
          name="name"
          placeholder="Enter Movie Name..."
          value={name}
          onChange={this.onChange}
          marginBottom={10}
        />

        <Label htmlFor="description" marginBottom={4} display="block">
          Description
        </Label>
        <Textarea
          id="description"
          name="description"
          placeholder="Textarea placeholder..."
          value={description}
          onChange={this.onChange}
          marginBottom={10}
        />

        <Label htmlFor="director" marginBottom={4} display="block">
          Director
        </Label>
        <TextInput
          id="director"
          name="director"
          placeholder="Enter Movie Director..."
          value={director}
          onChange={this.onChange}
          marginBottom={10}
        />

        <Label htmlFor="type" marginBottom={4} display="block">
          Type
        </Label>
        <TextInput
          id="type"
          name="type"
          placeholder="Enter Movie Type..."
          value={type}
          onChange={this.onChange}
          marginBottom={10}
        />

        <Label htmlFor="stars" marginBottom={4} display="block">
          Cast
        </Label>
        <TagInput
          id="stars"
          name="stars"
          inputProps={{ placeholder: "Add trees..." }}
          values={stars}
          // onAdd={value => {
          //   this.setState({ stars: [...this.state.stars, value.toString()] });
          // }}
          // onRemove={(_value, index) => {
          //   this.setState({
          //     stars: this.state.stars.filter((_, i) => i !== index)
          //   });
          // }}
          marginBottom={20}
        />
      </div>
    );
  }
}

export default SingleMovieItem;
