import LandingPage from "./pages/LandingPage";
import ProjectsPage from "./pages/ProjectsPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";

import Navbar from "./component/Navbar";
import StyledNavbar from "./component/styles/Navbar.styled"
import {Route, Routes} from "react-router-dom";

const App = () => {
  return (
    <div>
      <StyledNavbar>
        <Navbar/>
      </StyledNavbar>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/projects" element={<ProjectsPage/>}/>
          <Route path="/blog" element={<BlogPage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
        </Routes>
    </div>
  );
}

export default App;