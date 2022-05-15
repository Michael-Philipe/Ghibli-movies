import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import InfoFilm from '../pages/InfoFilm';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const RoutesWrapper = () => {
  const location = useLocation();
  console.log(location);
  return (
    <TransitionGroup>
      <CSSTransition key={location.key} timeout={250} classNames='fade'>
        <Routes location={location}>
          <Route exact path='/' element={<Dashboard />} />
          <Route path='/film/:id' element={<InfoFilm />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default RoutesWrapper;
