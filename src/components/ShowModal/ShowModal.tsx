import React, { useEffect, useState } from 'react';
import { Box, Modal, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { MovieActions } from '../../features/movies/movieReducer';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '67vh',
    bgcolor: '#333',
    boxShadow: 24,
    color: '#fff',
    p: 4,
    borderRadius: 2,
};

const ShowModal = () => {
    const dispatch = useAppDispatch();
    const state = useAppSelector((s) => s.page_movies);
    const { selectedMovie } = state;
    const [open, setOpen] = useState<boolean>(false);

    useEffect(() => {
        setOpen(selectedMovie !== undefined);
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
            sx={{ }}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <img alt={'movie poster'} src={selectedMovie.images['Poster Art'].url} width={'100%'} height={450} style={{ objectFit: 'cover' }}/>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    {`${selectedMovie.title} (${selectedMovie.releaseYear})`}
                </Typography>
                {selectedMovie.description}
            </Box>
        </Modal>
    );
};

export default ShowModal;