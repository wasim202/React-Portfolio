import React, { useState } from 'react';
import github from '../../images/github.png';
import linkedin from '../../images/linkedin.png';
//import Footer from '/Footer.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer(){
    return(
//         <nav className='navbar navbar-expand-lg mt-auto navbar-dark bg-dark'> 
// <div className='container-fluid'>
//     <Row xs={1} md={2}>
       
//         <div className='github'>
//         <a href='https://github.com/wasim202'>
//             <img src={github} alt='GitHub profile'></img>
//         </a>
//     </div>
       
   
//     <div className='linkedin'>
//         <a href='https://www.linkedin.com/in/wasim-mohammad-22a53590/'>
//             <img src={linkedin} alt='LinkedIn profile'></img>
//         </a>
//     </div>
//     </Row>
// </div>
// </nav>
<nav className="navbar navbar-expand-lg mt-auto navbar-dark bg-dark">
      <div className="container-fluid">
        <a
          className="navbar-brand"
          href="https://github.com/wasim202"
          target="_blank"
        >
          <a href='https://github.com/wasim202'>
          <img src={github} alt='GitHub profile'></img>
        </a>
        </a>
        <a
          className="navbar-brand"
          href="https://www.linkedin.com/in/wasim-mohammad-22a53590/"
          target="_blank"
        >
          <a href='https://www.linkedin.com/in/wasim-mohammad-22a53590/'>
             <img src={linkedin} alt='LinkedIn profile'></img>
         </a>
        </a>
    
      </div>
    </nav>
    );
}

export default Footer;