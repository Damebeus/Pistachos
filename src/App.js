import { BrowserRouter, Route, Switch } from "react-router-dom";
import AdminCreate from "./components/Admin/AdminCreate";
import AdminHome from "./components/Admin/AdminHome";
import AdminLog from "./components/Admin/AdminLog";
import AdminOrdern from "./components/Admin/AdminOrdern";
import AdminProducts from "./components/Admin/AdminProducts";
import Home from "./components/Home/Home";
import ProductList from "./components/ProductList/ProductList";
/* import {SiGooglemaps} from  SiGooglemaps */

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/listado' component={ProductList} />
          <Route exact path='/admin' component={AdminLog}/>
          <Route path='/admin/home' component={AdminHome}/>
          <Route path='/admin/ordenes' component={AdminOrdern}/>
          <Route path='/admin/products' component={AdminProducts}/>
          <Route path='/admin/create' component={AdminCreate}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
