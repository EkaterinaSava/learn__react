import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contacts } from './pages/Contacts';
import { NotFound } from './pages/NotFound';
import { Category } from './pages/Category';

function App() {
  return (
    <>
      <Router>
        <Header />
        <main className="page-main">
          <div className="container">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/about" component={About} />
              <Route path="/contacts" component={Contacts} />
              <Route path="/category/:name" component={Category} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
