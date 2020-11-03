import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Grid from './components/Grid';
import DetailCard from './components/DetailCard';
import Navbar from './components/navBar/Navbar';

import Evenements from './components/categories/Evenements';
import Tarifs from './components/categories/Tarifs';
import Kids from './components/categories/Kids';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Navbar />
            <Grid />
          </Route>
          <Route path="/spectacles/" component={Evenements} />
          <Route path="/tarifs/" component={Tarifs} />
          <Route path="/enfants/" component={Kids} />
        </Switch>
      </Router>

      {/* <Navbar />
      <Grid />
      <DetailCard />
      <Evenements /> */}
      {/* <Tarifs />
      <Kids /> */}
    </>
  );
}

export default App;
