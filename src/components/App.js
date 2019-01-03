import React, { Component } from 'react';

// evergreen ui components
import {
  Pane,
  Heading,
  Button,
  Spinner
} from 'evergreen-ui';

import firebase from '../database/firebase';
import MoviesTable from './MoviesTable';

class App extends Component {

  constructor(props) {
    super(props);

    this.ref = firebase.firestore().collection('movies');
    this.unsubscribe = null;
    this.state = {
      loading: true,
      moviesList: []
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const moviesList = [];
    querySnapshot.forEach((doc) => {
      const { description, director, name, stars, type } = doc.data();
      moviesList.push({
        key: doc.id,
        description,
        director,
        name,
        stars,
        type
      });

    });
    this.setState({
      loading: false,
      moviesList
    });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  render() {

    const { loading, moviesList } = this.state;

    let ShowTable;
    if (loading) {
      ShowTable = <Pane display="flex" alignItems="center" justifyContent="center"><Spinner size={24} /></Pane>;
    } else {
      ShowTable = <MoviesTable moviesList={moviesList} />;
    }

    return (
      <div className="App">

        <Pane background="tint1" padding={24} maxWidth={800} margin={'auto'}>

          <Pane display="flex" marginBottom={20}>
            <Pane flex={1} alignItems="center" display="flex">
              <Heading size={600}>Firebase Movies Database</Heading>
            </Pane>
            <Pane>
              <Button appearance="primary">Add New Movies</Button>
            </Pane>
          </Pane>

          {ShowTable}

        </Pane>

      </div>
    );
  }
}

export default App;