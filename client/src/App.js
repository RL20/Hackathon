import { BrowserRouter, Route, Link } from "react-router-dom/cjs/react-router-dom.min";
import './App.css';
import WelcomePage from './components/WelcomePage'
import GamePage from './components/GamePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Route path="/" exact>
            <WelcomePage />
          </Route>
          <Route path="/game" exact>
            <GamePage />
          </Route>
      </BrowserRouter>
    </div >
  );
}

export default App;
