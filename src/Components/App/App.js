import React, { Component } from 'react';
import './App.scss';

import SVGPage from '../SVGPage/SVGPage';
import ProjectsContainer from '../ProjectsContainer/ProjectsContainer';
import NavBar from '../NavBar/NavBar';

import { Route, Switch, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

const App = () => {

  const location = useLocation();
  
    const pageVariants = {
      in: {
        opacity: 1
      },

      out: {
        opacity: 0
      }
    };

    return (
      <main>
         <NavBar />
         <AnimatePresence exitBeforeEnter>
           <Switch location={location} key={location.pathname} >
              <Route exact path='/' render={() => <SVGPage pageVariants={pageVariants} /> } />
              <Route exact path='/projects' render={() => <ProjectsContainer pageVariants={pageVariants} /> }/>
              {/* <Route exact path='/resume' render={() => <Resume pageVariants={pageVariants} pageTransitions={pageTransitions}/> }/> */}
           </Switch>
         </AnimatePresence>
      </main>
    )
  }

export default App;
