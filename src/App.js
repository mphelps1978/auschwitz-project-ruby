import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import PhotoGallery from './components/PhotoGallery'
import Navbar from './components/navbar';
import Home from './components/Home'

function App() {
  return (
    <div className="App">
        <Router>
        <Navbar/>
        <div className="container">
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exect path='/gallery' component={PhotoGallery} />
            </Switch>
        </div>
        </Router>
      </div>
  );
}

export default App;
