import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import InfoFilm from '../pages/InfoFilm'

const RoutesWrapper = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Dashboard/>}/>
      <Route path='/film/:id' element={<InfoFilm/>}/>
    </Routes>
  )
}

export default RoutesWrapper