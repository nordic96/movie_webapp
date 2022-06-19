import React, { useEffect, useState } from 'react';

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
    const [imgSrc, setImgSrc] = useState<string>(images["Poster Art"].url);

    const onClickShow = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.preventDefault();
        dispatch({ type: MovieActions.SET_SELECTED_MOVIE, data: data });
    };

    useEffect(() => {
        setImgSrc(images["Poster Art"].url);
    }, [images]);

    return (
        <Box
            id={`showbox-${data.title}`}
            sx={BoxStyles}
            borderRadius={1}
            onClick={onClickShow}
        >
            <img
                src={imgSrc}
                width={BOX_WIDTH}
                alt={'Program Poster'}
                onError={() => {
                    setImgSrc("img/blank-file-svgrepo-com.svg");
                }}
                />
            <div style={{ display: 'flex', gap: 8, padding: '8px 16px' }}>
                <Typography color={'#333'} fontWeight={'bold'} fontSize={18}>{title}</Typography>
                <Typography color={'#333'} fontSize={'18px'}>{`(${releaseYear})`}</Typography>
                <Typography
                    sx={{
                        fontSize: 16,
                        height: 24,
                        padding: '2px 4px',
                        borderRadius: 1,
                        display: 'flex',
                        alignItems: 'center',
                        backgroundColor: ProgramTypeColor[programType],
                        color: '#fff'
                    }}
                >
                    {programType}
                </Typography>
            </div>
        </Box>
    );
};

export default ShowBox;
