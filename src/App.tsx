import React from "react";
import Home from "./pages/Home"
import Nav from "./components/Nav";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    
    <Router>
        <Nav />
        <Home/>
        <Switch>
        
          <Route path="/  ">
            <Home />
          </Route>
        </Switch>
        
    </Router>

    

   
  );
  
}

export default App;
