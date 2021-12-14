
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Dashboard from './js/Dashboard'; 
import Login from './js/Login';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" >
            <Login />
          </Route>
          <Route path="/dashboard" >
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
