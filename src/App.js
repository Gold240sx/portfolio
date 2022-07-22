import React, { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import './Styles/App.css';
import particlesOptions from "./particles.json";

import Header from './JS/Components/Header';
import PortfolioContainer from './JS/Components/PortfolioContainer';

function App() {

    return (
        <div className="App">
            <PortfolioContainer />
        </div>
    );
}

export default App;
