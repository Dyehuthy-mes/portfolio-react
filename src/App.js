import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home';
import AboutMe from './Pages/AboutMe/AboutMe';

function App() {
  return (
  <div className="principal">
  <Router>
    <Switch>
    <Route exact path="/">
      <AboutMe/>
    </Route>
    <Route path="/about-me">
      <Home/>
    </Route>
    </Switch>
  </Router>
  </div>
  )

}

export default App;