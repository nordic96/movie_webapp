import React from 'react';

import './App.css';

/** Components */
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

/** Pages */
import Home from './pages/Home';
import Header from './components/Header/Header';
import MoviesList from './pages/MoviesList';

const AppRoutes = () => {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <Header />
                </header>
                <Routes>
                    <Route path={'/'} element={<Home />} />
                    <Route path={'/movies'} element={<MoviesList />} />
                    <Route path={'/series'} element={<></>} />
                    <Route path={'/about'} element={<></>} />
                </Routes>
            </div>
        </Router>
    )
};

export default AppRoutes;