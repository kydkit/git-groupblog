

import { BrowserRouter, Switch } from 'react-router-dom';
import Home from './pages/Home';

function Navbar() {
    return (
      <div className={navbar}>
      <Link to="/">Home </Link>
      <Link to="/pages/about">About</Link>
      </div>
    )
  }
  
  export default Navbar;
  
