import React, { Component } from 'react';

import EditMovieItem from './EditMovieItem';

import { Pane } from 'evergreen-ui';

class EditMovie extends Component {

    render() {
        const { id } = this.props.match.params;
        return(
            <Pane background="yellowTint" padding={24} maxWidth={800} margin={"auto"}>
                <EditMovieItem id={id} />
            </Pane>
        )
    }
}

export default EditMovie;