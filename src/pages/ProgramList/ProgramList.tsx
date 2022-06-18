import React, { useEffect, useState } from 'react';

/** Components */
import { Box, Button, Typography } from '@mui/material';
import ShowBox from '../../components/ShowBox';
import ShowModal from '../../components/ShowModal';
import ShowLoading from '../../components/ShowBox/ShowLoading';
import wrapWithPageStyles from '../../components/wrapWithPageStyles';

import { useAppSelector, useAppThunkDispatch } from '../../app/hooks';
import { fetchMovies } from '../../features/movies/movieReducer';
import { Movie, ProgramType } from '../../services/movies/types';

import { btnStyle } from './styles';
import EmptyContent from '../../components/EmptyContent';

export interface ProgramListProps {
    programType: ProgramType;
}

const ProgramList = (props: ProgramListProps) => {
    const OFFSET = 20;
    const { programType } = props;
    const state = useAppSelector((s) => s.page_movies);
    const { movies } = state;
    const { entries, total } = movies;
    const [filteredMovies, setMovies] = useState<Movie[]>([]);
    const [page, setPage] = useState<number>(1);
    const [maxPage, setMaxPage] = useState<number>(Math.ceil(total / OFFSET));
    const thunkDispatch = useAppThunkDispatch();

    useEffect(() => {
        thunkDispatch(fetchMovies());
    }, [thunkDispatch]);

    useEffect(() => {
        setPage(1);
    }, [programType]);

    useEffect(() => {
        const filtered = entries.filter((x) => x.programType === programType);
        const n = filtered.length;
        setMovies(filtered);
        setMaxPage(Math.ceil(n / OFFSET));
    }, [entries, programType]);

    const onClickMore = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        const newPage = page + 1;
        if (newPage > maxPage) return;
        setPage(page + 1);
    };

    return (
        <Box display={'flex'} padding={'24px 16px'} flexDirection={'column'} justifyContent={'center'} gap={2}>
            <Box gap={2} flexWrap={'wrap'} width={'100%'} display={'flex'} justifyContent={'center'}>
                {!state.loading && filteredMovies.length > 0 ? filteredMovies.slice(0, page * OFFSET).map((x, i) => {
                    return <ShowBox data={x} key={i} />;
                }) : !state.loading && filteredMovies.length <= 0 ?
                    <EmptyContent />
                   : new Array(10).fill(1).map((x, i) => {
                    return <ShowLoading key={i} />;
                })}
            </Box>
            {(page < maxPage && !state.loading) && <Button sx={btnStyle} onClick={onClickMore}>Show More</Button>}
            <ShowModal />
        </Box>
    );
};

export default wrapWithPageStyles(ProgramList);
