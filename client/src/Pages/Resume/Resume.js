import React from 'react'
import resume from './Wasim-resume-New.pdf';



export default function Resume() {
  return (
    <div>
     <a href={resume} download="Wasim Mohammad resume"> Download Resume </a>
    </div>
  )
}
