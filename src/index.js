import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import LandingPanel from './Pages/LangingPanel';
import WebsitePanel from './Pages/Website/WebsitePanel';
import DevelopmentPanel from './Pages/Development/DevelopmentPanel';
import ProjectDetails from './Pages/Development/Components/ProjectDetails';

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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
