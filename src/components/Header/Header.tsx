import React from 'react';

import { AppBar, Box } from '@mui/material';
import { NavLink } from 'react-router-dom';
import logo from '../../logo.svg';

const Header = () => {
    return (
        <AppBar sx={{
            padding: '8px 16px',
            display: 'flex',
            gap: 1,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#212121',
        }}>
            <Box display={'flex'} flexDirection={'row'} alignItems={'center'}>
                <img src={logo} style={{ width: 56, height: 56 }} className="App-logo" alt="logo" />
                <NavLink style={{ fontSize: 28, fontWeight: 'bold' }} className={'NavMenu'} to={'/'}>{'Cine Movies'}</NavLink>
            </Box>
            <Box display={'flex'} flexDirection={'row'} gap={2}>
                <NavLink className={'NavMenu'} to={'/movies'}>Latest Movies</NavLink>
                <NavLink className={'NavMenu'} to={'/series'}>Latest Series (TV)</NavLink>
                <NavLink className={'NavMenu'} to={'/about'}>About</NavLink>
            </Box>
        </AppBar>
    );
};

export default Header;

