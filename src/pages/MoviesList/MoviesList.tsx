import React, { useEffect } from 'react';

import movieService from '../../services/movies/index';

const MoviesList = () => {
    useEffect(() => {
        movieService.fetchMovies().then((res) => {
            console.log(res);
        });
    }, []);
    return <></>;
};

export default MoviesList;
