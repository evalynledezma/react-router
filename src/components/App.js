import React from 'react';

import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Blog from "./pages/blog";

function App() {
  return (
    <div className="App">
      <Router>
      <div>
      <NavigationContainer/>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about-me" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/blog" component={Blog} />


      </Switch>
      </div>
    </Router>

    </div>
  );
}

export default App;
