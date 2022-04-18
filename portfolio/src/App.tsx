import LandingPage from "./pages/LandingPage";
import ProjectsPage from "./pages/ProjectsPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";

import Navbar from "./component/Navbar";
import {BrowserRouter as Router, Route, Routes, Outlet } from "react-router-dom"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar/>}>
          <Route index element={<LandingPage/>}/>
          <Route path="projects" element={<ProjectsPage/>}/>
          <Route path="blog" element={<BlogPage/>}/>
          <Route path="contact" element={<ContactPage/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;