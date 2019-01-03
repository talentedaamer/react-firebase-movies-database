import React, { Component } from "react";

import firebase from "../../../database/firebase";

// import ui components
import {
  Pane,
  Button,
  Label,
  TextInput,
  Textarea,
  TagInput
} from "evergreen-ui";

class CreateMovie extends Component {
  constructor() {
    super();

    this.ref = firebase.firestore().collection("movies");
    this.state = {
      name: "",
      description: "",
      director: "",
      type: "",
      stars: []
    };
  }

  onChange = e => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  submitForm() {
    this.setState({
      name: "",
      description: "",
      director: "",
      type: "",
      stars: []
    });
    console.log("form submitted");
  }

  render() {
    const { name, description, director, type, stars } = this.state;

    return (
      <Pane background="yellowTint" padding={24} maxWidth={800} margin={"auto"}>
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
          values={this.state.stars}
          onAdd={value => {
            this.setState({ stars: [...this.state.stars, value] });
          }}
          onRemove={(_value, index) => {
            this.setState({
              stars: this.state.stars.filter((_, i) => i !== index)
            });
          }}
          marginBottom={20}
        />

        <Button
          display="block"
          onClick={this.submitForm}
          appearance="primary"
          iconBefore="add"
        >
          Add Movie
        </Button>
      </Pane>
    );
  }
}

export default CreateMovie;
