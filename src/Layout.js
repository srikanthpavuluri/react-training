import { Route, Switch } from 'react-router-dom';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetails';
import MainHeader from './components/MainHeader';
import Home from './pages/Home';
import UserSearch from './pages/Users/UserFinder';
import Counter from './Counter';

function Layout() {
  return (
    <div>
      <MainHeader/>
      <main>
        <Switch>
          <Route path='/counter' component={Counter}/> 
          <Route path='/users' component={UserSearch}/> 
          <Route exact path='/products' component={Products} />
          <Route path='/products/:id' component={ProductDetail} />
          <Route path='/Contact-Us' component={ContactPerson} />
          <Route exact path='/'> <Home /> </Route>
        </Switch>
      </main>
    </div>
  );
}

export default Layout;

// localhost:3000/ => Home Component
// localhost:300/products => Products Component
// localhost:300/product/2 => Product details Component
