import React from 'react';
import { Box, Typography } from '@mui/material';
import { Movie } from '../../services/movies/types';
import { ProgramTypeColor } from './constants';

export interface ShowBoxProps {
    data: Movie;
}

const ShowBox = (props: ShowBoxProps) => {
    const { data } = props;
    const { title, images, programType, releaseYear } = data;
    return (
        <Box width={304} borderRadius={1} overflow={'hidden'} boxShadow={'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px'}>
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
