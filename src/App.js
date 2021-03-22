import './App.css';
import Header from './Header';
import Home from './Home/Home'

function App() {
  // BEM naming convention
  return (
    <div className="app">
      <Header />
      <Home />
    </div>
  );
}

export default App;
