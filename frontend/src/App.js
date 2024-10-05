import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ZenaraLandingPage from './landing';
import Dash from './dash';
import Sec from './security';
import Login from './login';
import Quiz from  './quiz';
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ZenaraLandingPage />} />
                <Route path="/dash" element={<Dash />} />
                <Route path="/sec" element={<Sec />} />
                <Route path="/login" element={<Login />} />
                <Route path="/quiz" element={<Quiz />} />
            </Routes>
        </Router>
    );
}

export default App;
