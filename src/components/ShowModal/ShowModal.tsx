import React, { useEffect, useState } from 'react';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import { Box, Modal, Typography } from '@mui/material';

import { ShowModalStyles } from './styles';

import movieService from '../../services/movies/index';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { MovieActions } from '../../features/movies/movieReducer';
import { YearFact } from '../../services/movies/types';
import { YearFactLoadErrMsg } from './constants';

const ShowModal = () => {
    const dispatch = useAppDispatch();
    const state = useAppSelector((s) => s.page_movies);
    const { selectedMovie } = state;
    const [open, setOpen] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [yearFact, setYearFact] = useState<YearFact>();

    useEffect(() => {
        setOpen(selectedMovie !== undefined);
        if (selectedMovie === undefined) return;

        setLoading(true);
        movieService.fetchInterestingFacts(selectedMovie.releaseYear).then((res) => {
            if (res !== undefined) setYearFact(res);
            setLoading(false);
        }).catch((err) => setLoading(false));
    }, [selectedMovie]);

    const onClose = () => {
        setOpen(false);
        dispatch({ type: MovieActions.SET_SELECTED_MOVIE, data: undefined });
    };

    if (selectedMovie === undefined) return null;
    return (
        <Modal
            open={open}
            onClose={onClose}
            sx={{}}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={ShowModalStyles}>
                <img alt={'movie poster'} src={selectedMovie.images['Poster Art'].url} width={'100%'} height={450} style={{ objectFit: 'cover' }} />
                <Typography id="modal-modal-title" variant="h5" component="h2" fontWeight={'bold'} paddingTop={2}>
                    {`${selectedMovie.title} (${selectedMovie.releaseYear})`}
                </Typography>
                <Typography id="modal-modal-description" paddingTop={1}>
                    {selectedMovie.description}
                </Typography>
                <Box paddingTop={2}>
                    {loading ?
                        <Skeleton baseColor='#464646'/>
                    :   <Typography fontStyle={'italic'} fontSize={14}>
                            {yearFact ? `* ${yearFact?.text}` : YearFactLoadErrMsg}
                        </Typography>
                    }
                </Box>
            </Box>
        </Modal>
    );
};

export default ShowModal;