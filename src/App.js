import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import ProductsContainer from './components/ProductsContainer';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/products' component={ProductsContainer}/>
        <Route exact path='/categories/:categorie' component={ProductsContainer}/>
        <Route exact path='/products/:id' component={ProductDetail}/>
        <Route exact path='/cart' component={Cart}/>
        <Route exact path='/checkout' component={Checkout}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
