import React from 'react';
// import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import AppContainer from './AppContainer';
import HomePage from './Pages/HomePage';
// import SkillsPage from './Pages/SkillsPage';
// import ExperiencePage from './Pages/ExperiencePage';
import NotFound from './Pages/NotFound';

const ProfileRouter = (
    <Router history={browserHistory}>
        <Route path="/" component={AppContainer}>
            <IndexRoute component={HomePage} />
            {/*<Route path="skills"      component={SkillsPage}/>*/}
            {/*<Route path="experience"  component={ExperiencePage}/>*/}
        </Route>
        <Route path="*" component={NotFound}/>
    </Router>
);

export { ProfileRouter };