import "./App.scss";
import Nav from "./Nav";
import Home from "./Home";
import Main from "./Main"
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";

import { Route } from 'react-router'
import { BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/main" component={Main}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/contact" component={Contact}></Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
