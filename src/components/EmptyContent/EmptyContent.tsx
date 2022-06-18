import React from 'react';
import { CloudOffTwoTone } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';

const EmptyContent = () => {
    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} gap={1}>
            <CloudOffTwoTone sx={{ fontSize: '15vw' }} />
            <Typography variant={'h3'} fontWeight={'bold'}>Error</Typography>
            <Typography variant={'h5'}>We are unable to load Program Data :'(</Typography>
        </Box>
    );
};

export default EmptyContent;
