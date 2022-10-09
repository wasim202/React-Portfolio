import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Main from './components/Main';
import Footer from './components/Footer/Footer';
import NavBar from './components/Navigation/NavBar';

import './App.css';


function App() {
  return (
   <div className='App'>
<BrowserRouter>
<NavBar/>
<Main/>
<Footer/>
</BrowserRouter>
   </div>
  );
}

export default App;
