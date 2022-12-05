import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contacts } from './pages/Contacts';
import { NotFound } from './pages/NotFound';

function App() {
  return (
    <>
      <Header />
      <main className="page-main">
        <div className="container">
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contacts" component={Contacts} />
              <Route component={NotFound} />
            </Switch>
          </Router>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
