import React, {Suspense} from 'react';
import { Switch } from 'react-router-dom';
// import Products from './Components/Products';
import Welcome from './Components/Welcome';
import Header from './Components/Header';
import classes from './Components/Header.module.css';
// import ProductDetails from './Components/ProductDetail';
// import LoginPage from './Components/Auth/LoginPage';
import ProtectedRouter from './Components/Router/ProtectedRouter';
import PublicRouter from './Components/Router/PublicRouter';


const LoginPage= React.lazy(()=>import('./Components/Auth/LoginPage'))
const Products=React.lazy(()=>import('./Components/Products'))
const ProductDetails= React.lazy(()=>import('./Components/ProductDetail'))


function App() {
  return (
    <>
      <header className={classes.header}>
        <Header />
      </header>
      <main>
        <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <PublicRouter path="/login" component={LoginPage} />
          <ProtectedRouter path="/welcome" component={Welcome} />
          <ProtectedRouter path="/products" component={Products} exact />
          <ProtectedRouter
            path="/products/:productId"
            component={ProductDetails}
          />
          <PublicRouter path="*" component={LoginPage} />
        </Switch>
        </Suspense>
      </main>
    </>
  );
}

export default App;

//productId could be any value
