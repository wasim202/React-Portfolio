import React from 'react'
import resume from './Wasim-resume-New.pdf';
import { Link } from 'react-router-dom';



export default function Resume() {
  return (
    <div>
     <a href={resume} download="Wasim Mohammad resume"> Download Resume </a>
    </div>
  )
}
