import React from 'react';

import './App.css';

/** Components */
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

/** Pages */
import Home from './pages/Home';
import Header from './components/Header/Header';
import ProgramList from './pages/ProgramList';
import { ProgramType } from './services/movies/types';

const AppRoutes = () => {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <Header />
                </header>
                <Routes>
                    <Route path={'/'} element={<Home />} />
                    <Route path={'/movies'} element={<ProgramList programType={ProgramType.Movies}/>} />
                    <Route path={'/series'} element={<ProgramList programType={ProgramType.Series}/>} />
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