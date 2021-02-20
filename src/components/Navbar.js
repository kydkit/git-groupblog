

import { BrowserRouter, Switch } from 'react-router-dom';
import Home from '../pages/Home';

function Navbar() {
    return (
<<<<<<< HEAD
      <div className={navbar}>
      <Link to="/">Home </Link>
      <Link to="/pages/about">About</Link>
=======
      <div className="Navbar">
            <BrowserRouter>
            <Switch>
            <Link to="/">Home</Link>

                </Switch>
            </BrowserRouter>

>>>>>>> blogList
      </div>
    )
  }
  
  export default Navbar;
  
