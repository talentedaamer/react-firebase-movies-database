import React, { Component } from 'react';

import { Table, IconButton } from 'evergreen-ui';

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
                        <Table.Row key={movie.key}>
                            <Table.TextCell>{movie.name}</Table.TextCell>
                            <Table.TextCell>{movie.type}</Table.TextCell>
                            <Table.TextCell>{movie.director}</Table.TextCell>
                            <Table.TextCell>{movie.stars.join(', ')}</Table.TextCell>
                            <Table.TextCell>{movie.description}</Table.TextCell>
                            <Table.TextCell>
                                <IconButton
                                    appearance="minimal"
                                    height={24}
                                    icon="eye-open"
                                    intent="primary"
                                    iconSize={14}
                                    float="left"
                                />
                                <IconButton
                                    appearance="minimal"
                                    height={24}
                                    icon="edit"
                                    iconSize={14}
                                    float="left"
                                />
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
                    ))}
                </Table.Body >
            </Table>
        )
    }
}

export default MoviesTable;