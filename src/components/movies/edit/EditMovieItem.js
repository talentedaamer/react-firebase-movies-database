import React, {Component} from "react";
import firebase from '../../../database/firebase';

import {
    Label,
    TextInput,
    Textarea,
    TagInput,
    Button,
    toaster
} from "evergreen-ui";

class SingleMovieItem extends Component {

    constructor(props) {
        super(props);

        this.ref = firebase.firestore().collection("movies");

        this.state = {
            key: "",
            name: "",
            description: "",
            director: "",
            type: "",
            stars: [],
            isLoading: false
        }
    }

    onChange = e => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
    };

    saveMovie = () => {
        const updateRef = firebase.firestore().collection("movies").doc( this.state.key );
        const { name, description, director, type, stars } = this.state;

        if ( name === '' || description === '' ) {
            toaster.danger("Error!", {
                description: 'Name & Description can not be empty'
            });
            return;
        }

        this.setState({
            isLoading: ! this.state.isLoading
        });

        updateRef.set({
            name,
            description,
            director,
            type,
            stars
        }).then( doc => {
            toaster.success("Success!", {
              description: 'Movie item updated successfully'
            });
            this.setState({
                isLoading: ! this.state.isLoading
            });
        }).catch( error => {
            console.log('Could not edit movie', error );
        });
    }

    componentDidMount() {
        const { id } = this.props;
        const docRef = this.ref.doc( id );

        docRef.get().then( doc => {
            if ( doc && doc.exists ) {
                const movie = doc.data();
                this.setState({
                    key: doc.id,
                    name: movie.name ? movie.name : '',
                    description: movie.description ? movie.description : '',
                    director: movie.director ? movie.director : '',
                    type: movie.type ? movie.type : '',
                    stars: movie.stars ? movie.stars : []
                });
            } else {
                console.log("No such document!");
            }
        } ).catch( error => {
            console.log( 'Could not get the Doc', error );
        } );
    }

    render() {
        const {name, description, director, type, stars} = this.state;

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
                    inputProps={{placeholder: "Add trees..."}}
                    values={stars}
                    onAdd={value => {
                      this.setState({ stars: [...this.state.stars, value.toString()] });
                    }}
                    onRemove={(_value, index) => {
                      this.setState({
                        stars: this.state.stars.filter((_, i) => i !== index)
                      });
                    }}
                    marginBottom={20}
                />

                <div>
                <Button
                    onClick={this.saveMovie}
                    isLoading={this.state.isLoading}
                    iconBefore="download">Save Movie</Button>
                </div>
            </div>
        );
    }
}

export default SingleMovieItem;
