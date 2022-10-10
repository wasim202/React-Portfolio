import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from '../Pages/Home'
import Portfolio from '../Pages/Portfolio/Portfolio'
import ContactMe from '../Pages/ContactMe'
import Resume from '../Pages/Resume/Resume'

export default function main() {
  return (
   <Routes>
    <Route path='/Home' exact element={<Home/>}/>
    <Route path='/Portfolio' exact element={<Portfolio/>}/>
    <Route path='/ContactMe' exact element={<ContactMe/>}/>
    <Route path='/Resume' exact element={<Resume/>}/>
   </Routes>
  )
}
