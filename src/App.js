import { BrowserRouter, Route, Switch } from "react-router-dom";
import AdminCreate from "./components/Admin/AdminCreate";
import AdminHome from "./components/Admin/AdminHome";
import AdminLog from "./components/Admin/AdminLog";
import AdminOrdern from "./components/Admin/AdminOrdern";
import AdminProducts from "./components/Admin/AdminProducts";
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

          <Route exact path='/admin' component={AdminLog}/>
          <Route path='/admin/home' component={AdminHome}/>
          <Route path='/admin/ordenes' component={AdminOrdern}/>
          <Route path='/admin/products' component={AdminProducts}/>
          <Route path='/admin/create' component={AdminCreate}/>
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
