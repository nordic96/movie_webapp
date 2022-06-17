import React from 'react';
import { Box, SxProps, Typography } from '@mui/material';
import { Movie } from '../../services/movies/types';
import { ProgramTypeColor } from './constants';
import { useAppDispatch } from '../../app/hooks';
import { MovieActions } from '../../features/movies/movieReducer';

export interface ShowBoxProps {
    data: Movie;
}

const style: SxProps = {
    cursor: 'pointer',
};

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
            sx={style}
            width={304}
            borderRadius={1}
            overflow={'hidden'}
            onClick={onClickShow}
            boxShadow={'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px'}
        >
            <img src={images["Poster Art"].url} width={304} alt={'Movie Poster'} />
            <div style={{ display: 'flex', gap: 8, padding: '8px 16px' }}>
                <Typography color={'#333'} fontWeight={'bold'} fontSize={18}>{title}</Typography>
                <Typography color={'#333'} fontSize={'18px'}>{`(${releaseYear})`}</Typography>
                <Typography sx={{ fontSize: 16, height: 24, padding: '2px 4px', borderRadius: 1, display: 'flex', alignItems: 'center', backgroundColor: ProgramTypeColor[programType], color: '#fff' }}>{programType}</Typography>
            </div>
        </Box>
    );
};

export default ShowBox;
