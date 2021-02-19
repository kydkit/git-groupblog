

import { BrowserRouter, Switch } from 'react-router-dom';
import Home from './pages/Home';

function Navbar() {
    return (
      <div className="Navbar">
            <BrowserRouter>
            <Switch>
            <Link to="/">Home </Link>

                </Switch>
            </BrowserRouter>

      </div>
    );
  }
  
  export default Navbar;
  
