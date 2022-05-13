import React from 'react';
import Navbar from './Components/NavBar';
import Home from './Pages/Home';
import Create from './Pages/Create';
import BlogDetails from './Pages/blogdetail';
import NotFound from './Pages/NotFound';
import { BrowserRouter as Router,Route, Switch} from 'react-router-dom';

function App() {
 
  return (
<Router>
    <div className="App">
    <Navbar />
<div className="content">
  <Switch>

<Route exact path="/">
<Home />
</Route>

<Route  path="/create">
<Create />
</Route>

<Route  path="/blogs/:id">
<BlogDetails />
</Route>

<Route path="*">
<NotFound />
</Route>


  </Switch>
</div>
    </div>
</Router>
  );
}

export default App;
