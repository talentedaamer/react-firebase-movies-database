import React, {Component} from "react";

import {Link} from "react-router-dom";

import {
    Heading,
    Paragraph,
    Badge,
    Strong,
    Button,
} from "evergreen-ui";

class SingleMovieItem extends Component {

    render() {
        const { id, movie} = this.props;

        let stars;
        if (typeof movie.stars !== 'undefined' && movie.stars.length > 0) {
            stars = movie.stars.join(", ");
        }

        return (
            <div>
                <Heading size={500} marginBottom={10}>
                    {movie.name}
                    {movie.type !== undefined ? (
                        <Badge marginLeft={5} color="blue" isSolid>
                            {movie.type}
                        </Badge>
                    ) : ''}
                </Heading>
                <Paragraph size={500}>
                    {movie.director !== undefined ? (
                        <Strong>Director : {movie.director}</Strong>
                    ) : ''}
                </Paragraph>
                <Paragraph size={500} marginBottom={10}>
                    {stars !== undefined ? (
                        <Strong>Cast : {stars}</Strong>
                    ) : ''}
                </Paragraph>
                <Paragraph size={500} marginBottom={10}>
                    {movie.description}
                </Paragraph>

                <Paragraph>
                    <Link to={`/edit/${id}`}>
                        <Button marginRight={10} iconBefore="edit">
                            Edit
                        </Button>
                    </Link>
                </Paragraph>
            </div>
        );
    }
}

export default SingleMovieItem;
