import Header from './Header';
import Chat from './Chat';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Impressum from './Impressum';
import Datenschutz from './Datenschutz';
import Footer from './Footer';

// import Test from './test';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
          <div className="content">
            <Switch>
                <Route exact path="/">
                  <Chat />
                </Route>
                <Route path="/impressum">
                  <Impressum />
                  <Footer />
                </Route>
                <Route path="/datenschutz">
                  <Datenschutz />
                  <Footer />
                </Route>
                <Route path="*">
                  <h1 className='not-found'>Page not found</h1>
                  <Footer />
                </Route>
            </Switch>
          </div>
      </div>
    </Router>
  );
}

export default App;
