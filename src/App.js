import './App.css';
import Header from './Header';
import Home from './Home/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  // BEM naming convention
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/checkout">
            <h1>Checkout Component</h1>
            {/* Checkout */}
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
