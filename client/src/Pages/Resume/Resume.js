import React from 'react'
import resume from './Wasim-resume-New.pdf';




export default function Resume() {
  return (
    <div className='container d-flex flex-column min vh-100'>
    <div>
     <a href={resume} download="Wasim Mohammad resume"> Download Resume </a>
    </div>
    </div>
  )
}
