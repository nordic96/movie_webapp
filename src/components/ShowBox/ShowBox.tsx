import React from 'react';

import { Box, Typography } from '@mui/material';
import { BoxStyles } from './styles';

import { useAppDispatch } from '../../app/hooks';
import { MovieActions } from '../../features/movies/movieReducer';
import { Movie } from '../../services/movies/types';

import { BOX_WIDTH, ProgramTypeColor } from './constants';

export interface ShowBoxProps {
    data: Movie;
}

const ShowBox = (props: ShowBoxProps) => {
    const { data } = props;
    const dispatch = useAppDispatch();
    const { title, images, programType, releaseYear } = data;

    const onClickShow = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.preventDefault();
        dispatch({ type: MovieActions.SET_SELECTED_MOVIE, data: data });
    };

    return (
        <Box
            sx={BoxStyles}
            borderRadius={1}
            onClick={onClickShow}
        >
            <img src={images["Poster Art"].url} width={BOX_WIDTH} alt={'Movie Poster'} />
            <div style={{ display: 'flex', gap: 8, padding: '8px 16px' }}>
                <Typography color={'#333'} fontWeight={'bold'} fontSize={18}>{title}</Typography>
                <Typography color={'#333'} fontSize={'18px'}>{`(${releaseYear})`}</Typography>
                <Typography sx={{ fontSize: 16, height: 24, padding: '2px 4px', borderRadius: 1, display: 'flex', alignItems: 'center', backgroundColor: ProgramTypeColor[programType], color: '#fff' }}>{programType}</Typography>
            </div>
        </Box>
    );
};

export default ShowBox;
