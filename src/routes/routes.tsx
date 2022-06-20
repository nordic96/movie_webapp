import React from 'react';

import '../App.css';

/** Components */
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

/** Pages */
import Home from '../pages/Home';
import Header from '../components/Header/Header';
import ProgramList from '../pages/ProgramList';
import { ProgramType } from '../services/movies/types';
import { Path } from './paths';

const AppRoutes = () => {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <Header />
                </header>
                <Routes>
                    <Route path={Path.Home} element={<Home />} />
                    <Route path={Path.Movies} element={<ProgramList programType={ProgramType.Movies}/>} />
                    <Route path={Path.Series} element={<ProgramList programType={ProgramType.Series}/>} />
                    <Route path={'/about'} element={<></>} />
                </Routes>
                <footer>
                    This website is built using ReactJS, Typescript, Redux, Material UI
                </footer>
            </div>
        </Router>
    )
};

export default AppRoutes;