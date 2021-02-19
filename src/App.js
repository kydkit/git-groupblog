import { BrowserRouter, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import BlogContextProvider from "./contexts/BlogContext";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Navbar />
          <BlogContextProvider>
            <Route exact path="/">
              <Home />
            </Route>
          </BlogContextProvider>
        </BrowserRouter>
    </div>
  );
}

export default App;
