import { BrowserRouter, Route, Link } from "react-router-dom";
import './App.css';
import WelcomePage from "./components/WelcomePage/WelcomePage";
import GamePage from "./components/GamePage/GamePage";

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
