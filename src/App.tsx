import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import MainRoute from './routes/index'

function App() {
    return (
        <div className={'app-container'}>
            <Router>
                <MainRoute/>
            </Router>
        </div>
    );
}

export default App;
