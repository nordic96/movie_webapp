import React from 'react';

import { AppBar, Box } from '@mui/material';
import { NavLink, useLocation } from 'react-router-dom';

import logo from '../../logo.svg';

import { Path } from '../../routes/paths';
import { HeaderStyles } from './styles';

const Header = () => {
    const currentRoute = useLocation();
    return (
        <AppBar sx={HeaderStyles}>
            <Box display={'flex'} flexDirection={'row'} alignItems={'center'}>
                <img src={logo} style={{ width: 56, height: 56 }} className="App-logo" alt="logo" />
                <NavLink style={{ fontSize: 28, fontWeight: 'bold' }} id={'nav-home'} className={'NavMenu'} to={'/'}>{'Cine Movies'}</NavLink>
            </Box>
            <Box display={'flex'} flexDirection={'row'} gap={2}>
                <NavLink id={'nav-movies'} className={currentRoute.pathname === Path.Movies ? 'NavMenuSelected' : 'NavMenu'} to={'/movies'}>Latest Movies</NavLink>
                <NavLink id={'nav-series'} className={currentRoute.pathname === Path.Series ? 'NavMenuSelected' : 'NavMenu'} to={'/series'}>Latest Series (TV)</NavLink>
                {/* <NavLink id={'nav-about'} className={'NavMenu'} to={'/about'}>About</NavLink> */}
            </Box>
        </AppBar>
    );
};

export default Header;

