import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contacts } from './pages/Contacts';
import { NotFound } from './pages/NotFound';
import { Category } from './pages/Category';
import { Recipe } from './pages/Recipe';

function App() {
  return (
    <>
      <Header />
      <main className="page-main">
        <div className="container">
          <Switch>
            <Route exact path="/" component={withRouter(Home)} />
            <Route path="/about" component={About} />
            <Route path="/contacts" component={Contacts} />
            <Route path="/category/:name" component={Category} />
            <Route path="/meal/:id" component={Recipe} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </main>
      <Footer />
  </>
  );
}

export default App;
