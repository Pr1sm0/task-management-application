import { Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import ProjectList from './components/ProjectList';

const routes = () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/projects" exact component={ProjectList} />
  </Switch>
);

export default routes;