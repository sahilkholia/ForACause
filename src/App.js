
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Dashboard from './js/Dashboard'; 
import Login from './js/Login';
import Vote from './js/Vote';
import Logout from './js/Logout';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" >
            <Login />
          </Route>
          <Route exact path="/dashboard" >
            <Dashboard />
          </Route>
          <Route exact path="/vote" >
            <Vote />
          </Route>
          <Route exact path="/logout" >
            <Logout />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
