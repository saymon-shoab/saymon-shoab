import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Footer from './Component/Share/Footer/Footer';
import Header from './Component/Share/Header/Header';
import Home from './Page/Home/Home';
import Contact from './Component/Contact/Contact';
import About from './Component/About/About';
import Project from './Component/Project/Project';
import Blog from './Component/Blog/Blog';
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
          <About />
          </Route>
          <Route path="/blog">
          <Blog />
          </Route>
          <Route path="/project">
          <Project />
          </Route>
          <Route path="/contact">
          <Contact />
          </Route>
        </Switch>
        <Footer />
    </Router>
    </div>
  );
}

export default App;


    