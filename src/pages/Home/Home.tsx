import React, { useEffect } from 'react';

/** components */
import { Box } from '@mui/system';
import { Fade, Typography } from '@mui/material';
import EmptyContent from '../../components/EmptyContent';
import ShowLoading from '../../components/ShowBox/ShowLoading';
import wrapWithPageStyles from '../../components/wrapWithPageStyles';

import '../../App.css';

import { useAppSelector, useAppThunkDispatch } from '../../app/hooks';
import { fetchMovies } from '../../features/movies/movieReducer';
import { useNavigate } from 'react-router-dom';

import { BOX_WIDTH } from '../../components/ShowBox/constants';
import { ProgramType } from '../../services/movies/types';

/** Home Page Node */
const Home = () => {
    const state = useAppSelector((s) => s.page_movies);
    const navigate = useNavigate();
    const { movies, loading } = state;
    const { total, entries } = movies;
    const checked = true;
    const thunkDispatch = useAppThunkDispatch();

    useEffect(() => {
        thunkDispatch(fetchMovies());
    }, [thunkDispatch]);

    const onClickPoster = (programType: ProgramType) => (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.preventDefault();
        switch (programType) {
            case ProgramType.Movies:
                navigate('/movies');
                break;
            case ProgramType.Series:
                navigate('/series');
                break;
            default:
                navigate('/');
        }
    };

    return (
        <div className={'PageContainer'}>
            <Box display={'flex'} justifyContent={'center'} flexDirection={'column'} gap={0.5}>
                <Typography variant={'h5'} fontWeight={'bold'} color={'#333'}>Welcome to Cine Movies</Typography>
                <Typography color={'#333'}>{`Total ${total.toLocaleString()} programs and films waiting to be discovered by you!`}</Typography>
            </Box>
            <Box display={'flex'} flexWrap={'wrap'} gap={1} justifyContent={'center'}>
                {!loading && entries.length > 0 ?
                    entries.slice(0, 20).map((x, i) => {
                        return (
                            <Fade in={checked} {...(checked ? { timeout: 500 * i } : {})}>
                                <Box
                                    key={i}
                                    sx={{
                                        width: BOX_WIDTH / 1.5,
                                        height: (BOX_WIDTH + 96) / 1.5,
                                        backgroundImage: `url("${x.images['Poster Art'].url}")`,
                                        backgroundSize: `${BOX_WIDTH / 1.5}px ${(BOX_WIDTH + 96) / 1.5}px`
                                    }}
                                >
                                    <Box className={'TrailerImg'} onClick={onClickPoster(x.programType)}>&nbsp;</Box>
                                </Box>
                            </Fade>
                        );
                    }) : !loading && entries.length <= 0 ?
                        <EmptyContent />
                        : new Array(20).fill(1).map((x, i) => {
                            return <ShowLoading key={i} width={BOX_WIDTH / 1.4} />;
                        })
                }
            </Box>
        </div>
    );
};

export default wrapWithPageStyles(Home);