import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import MobileWelcome from "./components/Home/Welcome/MobileWelcome";
import Welcome from "./components/Home/Welcome/Welcome";
import ProductList from "./components/ProductList/ProductList";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={MobileWelcome} />
          <Route exact path='/home' component={Home} />
          <Route path='/listado' component={ProductList} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
