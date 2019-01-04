import React, { Component } from 'react';

import firebase from '../../../database/firebase';

import Loader from '../../utilities/Loader';
import EditMovieItem from './EditMovieItem';

import { Pane } from 'evergreen-ui';

class EditMovie extends Component {

    constructor(props) {
        super(props);
        // this.ref = firebase.firestore().collection("movies");
    }

    componentDidMount() {
        // const { id } = this.props.match.params;

        // const docRef = this.ref.doc( id );
        // docRef.get().then( doc => {
        //     if ( doc && doc.exists ) {
        //         this.setState({
        //             movie: doc.data(),
        //             key: doc.id,
        //             loading: false
        //         });
        //     } else {
        //         console.log("No such document!");
        //     }          
        // } ).catch( error => {
        //     console.log( 'Could not get the Doc', error );  
        // } );
    }

    render() {
        const { id } = this.props.match.params;
        return(
            <Pane background="yellowTint" padding={24} maxWidth={800} margin={"auto"}>
                <EditMovieItem key={id} />
            </Pane>
        )
    }
}

export default EditMovie;