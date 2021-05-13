import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/detail/:movieId" component={Detail} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;
