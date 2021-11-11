import React, {Fragment} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer  from './components/Footer';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Faq from './components/buttondesc/Faq';
import Privacy from './components/buttondesc/Privacy';
import Term from './components/buttondesc/Term';

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Routes>
          <Route exact path='/term' element={<Term />}/>
          <Route exact path='/privacy' element={<Privacy />}/>
          <Route exact path='/faq' element={<Faq />}/>
        </Routes>
        <Footer />
      </Fragment>
    </Router>
  );
}

export default App;