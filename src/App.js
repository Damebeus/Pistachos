import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import ProductList from "./components/ProductList/ProductList";
/* import {SiGooglemaps} from  SiGooglemaps */
import Cart from "./components/Cart/Cart";
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/listado' component={ProductList} />
          <Route path='/cart' component={Cart}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
