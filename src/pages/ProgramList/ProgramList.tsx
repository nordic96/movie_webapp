import React, { useEffect, useState } from 'react';

/** Components */
import { Box, Button } from '@mui/material';
import ShowBox from '../../components/ShowBox';
import ShowModal from '../../components/ShowModal';
import ShowLoading from '../../components/ShowBox/ShowLoading';
import wrapWithPageStyles from '../../components/wrapWithPageStyles';
import EmptyContent from '../../components/EmptyContent';

import { useAppSelector, useAppThunkDispatch } from '../../app/hooks';
import { fetchMovies } from '../../features/movies/movieReducer';
import { Movie, ProgramType } from '../../services/movies/types';

import { btnStyle } from './styles';

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
    const [isLatest, setIsLatest] = useState<boolean>(true);
    const thunkDispatch = useAppThunkDispatch();

    useEffect(() => {
        thunkDispatch(fetchMovies());
    }, [thunkDispatch]);

    useEffect(() => {
        setPage(1);
    }, [programType]);

    useEffect(() => {
        const filtered = entries.filter((x) => x.programType === programType);
        if (isLatest) {
            filtered.sort((x, y) => y.releaseYear - x.releaseYear);
        } else {
            filtered.sort((x, y) => x.releaseYear - y.releaseYear);
        }
        const n = filtered.length;
        setMovies(filtered);
        setMaxPage(Math.ceil(n / OFFSET));
    }, [entries, programType, isLatest]);

    const onClickMore = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        const newPage = page + 1;
        if (newPage > maxPage) return;
        setPage(page + 1);
    };

    const onClickSort = (isLatest: boolean) => (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setIsLatest(isLatest);
    };

    return (
        <Box display={'flex'} padding={'24px 16px'} flexDirection={'column'} justifyContent={'center'} gap={2}>
            <Box display={'flex'} gap={2} justifyContent={'center'} textTransform={'unset'}>
                <Button id={'btn-sort-latest'} sx={{ backgroundColor: 'green', color: 'white', '&:hover': { backgroundColor: 'darkgreen' } }} onClick={onClickSort(true)}>Latest</Button>
                <Button id={'btn-sort-oldest'} sx={{ backgroundColor: 'red', color: 'white', '&:hover': { backgroundColor: 'darkred' }}} onClick={onClickSort(false)}>Oldest</Button>
            </Box>
            <Box id={'program-container'} gap={2} flexWrap={'wrap'} width={'100%'} display={'flex'} justifyContent={'center'}>
                {!state.loading && filteredMovies.length > 0 ? filteredMovies.slice(0, page * OFFSET).map((x, i) => {
                    return <ShowBox data={x} key={i} />;
                }) : !state.loading && filteredMovies.length <= 0 ?
                    <EmptyContent />
                   : new Array(10).fill(1).map((x, i) => {
                    return <ShowLoading key={i} />;
                })}
            </Box>
            {(page < maxPage && !state.loading) && <Button id={'btn-showmore'} sx={btnStyle} onClick={onClickMore}>Show More</Button>}
            <ShowModal />
        </Box>
    );
};

export default wrapWithPageStyles(ProgramList);
