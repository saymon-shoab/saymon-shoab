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
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
        
          </Route>
          <Route path="/">
           <Footer />
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;


    