import React, { useEffect, useState } from 'react';

/** Components */
import { Box, Button } from '@mui/material';
import ShowBox from '../../components/ShowBox';

import { useAppSelector, useAppThunkDispatch } from '../../app/hooks';
import { fetchMovies } from '../../features/movies/movieReducer';
import { Movie, ProgramType } from '../../services/movies/types';
import ShowModal from '../../components/ShowModal';

const MoviesList = () => {
    const OFFSET = 20;
    const { movies } = useAppSelector((s) => s.page_movies);
    const { entries, total } = movies;
    const [filteredMovies, setMovies] = useState<Movie[]>([]);
    const [page, setPage] = useState<number>(1);
    const [maxPage, setMaxPage] = useState<number>(Math.ceil(total / OFFSET));
    const thunkDispatch = useAppThunkDispatch();

    useEffect(() => {
        thunkDispatch(fetchMovies());
    }, [thunkDispatch]);
    
    useEffect(() => {
        const filtered = entries.filter((x) => x.programType === ProgramType.Movies);
        const n = filtered.length;
        setMovies(filtered);
        setMaxPage(Math.ceil(n / OFFSET));
    }, [entries]);

    const onClickMore = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        const newPage = page + 1;
        if (newPage > maxPage) return;
        setPage(page + 1);
    };

    return (
        <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} gap={2}>
            <Box gap={2} flexWrap={'wrap'} width={'100%'} display={'flex'} justifyContent={'center'}>
                {filteredMovies.slice(0, page * OFFSET).map((x, i) => {
                    return <ShowBox data={x} key={i} />;
                })}
            </Box>
            {page < maxPage && <Button onClick={onClickMore}>Show More</Button>}
            <ShowModal />
        </Box>
    );
};

export default MoviesList;
