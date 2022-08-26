import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import MobileWelcome from "./components/Home/Welcome/MobileWelcome";
import Welcome from "./components/Home/Welcome/Welcome";
import ProductList from "./components/ProductList/ProductList";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={MobileWelcome} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/listado' component={ProductList} />
          <Route path='/cart' component={Cart} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
