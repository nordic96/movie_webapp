import React, { useEffect } from 'react';

import { useAppThunkDispatch } from '../../app/hooks';
import { fetchMovies } from '../../features/movies/movieReducer';

const MoviesList = () => {
    const thunkDispatch = useAppThunkDispatch();

    useEffect(() => {
        thunkDispatch(fetchMovies());
    }, [thunkDispatch]);

    return <></>;
};

export default MoviesList;
