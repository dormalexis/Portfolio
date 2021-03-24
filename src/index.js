import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import LandingPanel from './panel/LangingPanel';
import WebsitePanel from './panel/Website/WebsitePanel';
import DevelopmentPanel from './panel/Development/DevelopmentPanel';
import ProjectDetails from './components/ProjectDetails';

import './css/main.scss';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
            <Route path='/developpeur-web-et-mobile' component={DevelopmentPanel}></Route>
            <Route path='/creation-site-internet-et-design' component={WebsitePanel}></Route>
            <Route path="/projects/:id/details" component={ProjectDetails}></Route>
            <Route component={LandingPanel}></Route>
        </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

