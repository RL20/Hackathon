import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import GamePage from "./components/GamePage/GamePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <WelcomePage />
          </Route>
          <Route path="/game" exact>
            <GamePage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
