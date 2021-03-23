import './App.css';
import NavBar from './Components/NavBar'
import HomePage from './Pages/HomePage';
import {Switch, Route} from 'react-router-dom';
import AboutPage from './Pages/AboutPage';

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <NavBar />
      </div>
      <div className="main-content">
        <div className="content">
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/about" exact>
              <AboutPage />
            </Route>
          </Switch>
          <HomePage />
        </div>
      </div>
    </div>
  );
}

export default App;