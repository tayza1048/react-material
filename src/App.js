import React, { Component, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Home = lazy(() => import("./pages/home/Home"));
const Posts = lazy(() => import("./pages/posts/Posts"));
const Calculator = lazy(() => import("./pages/calculator/Calculator"));
const Contact = lazy(() => import("./pages/contact/Contact"));

class App extends Component {
  render() {
    return (
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/posts" component={Posts} />
            <Route path="/calculator" component={Calculator} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </Suspense>
      </Router>
    );
  }
}

export default App;