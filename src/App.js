import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import SignIn from "./pages/SignIn";
import CreateRecipe from "./pages/CreateRecipes";
import ViewRecipe from "./pages/ViewRecipe";

function App() {
  return (
    <Router>
      {/* <nav>
        <Link to="/">Home</Link>

        {!user ? (
          <Link to="/signin">Sign In</Link>
        ) : (
          <>
            <Link to="/createrecipe">Create Recipe</Link>
            <button onClick={signUserOut}> Sign Out</button>
          </>
        )}
      </nav> */}
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createrecipe" element={<CreateRecipe />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/recipe/:id" element={<ViewRecipe />} />
      </Routes>
    </Router>
  );
}

export default App;
