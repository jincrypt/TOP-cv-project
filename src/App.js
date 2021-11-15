import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Home />
      <Routes>
        <Route exact path="/" component={Home} />
        <Route path='/about' component={Home} />
            {/* <Route path='/skills' component={Skills} />
            <Route path='/education' component={Education} />
            <Route path='/experience' component={Experience} />
            <Route path='/portfolio' component={Porfolio} /> */}
        </Routes>
    </Router>
  );
}

export default App;
