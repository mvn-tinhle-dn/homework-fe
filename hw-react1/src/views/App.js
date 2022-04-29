import { Route, Switch } from 'react-router-dom';
import Account from '../pages/Account';
import Auth from '../pages/Auth';
import Features from '../pages/Features';
import Header from '../components/layouts/Header';
import Footer from '../components/layouts/Footer';
import '../assets/scss/layouts/_all.scss'

function App() {
  return (
    <>
      <Header />
      <div className='main'>
        <Switch>
          <Route path="/account">
            <Account />
          </Route>
          <Route path="/auth">
            <Auth />
          </Route>
          <Route path="/">
            <Features />
          </Route>
        </Switch>
      </div>
      <Footer />
    </>
  );
}

export default App;
