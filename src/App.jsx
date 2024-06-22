import Home from "./pages/Home/Home";
import Layout from "./components/Layout/Layout"
import AboutMe from './pages/AboutMe/AboutMe'
import Education from './pages/Education/Education'
import WorkExperience from './pages/WorkExperience/WorkExperience'
import Projects from './pages/Projects/Projects'
import Contact from './pages/Contact/Contact'
import { Element } from 'react-scroll';
import { useState, useEffect } from "react";

function App() {

  const [isHome, setIsHome] = useState(true);

  const toggleIsHome = () => {
    setIsHome(!isHome)
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [isHome]);

  return (
    <>
      {isHome == true ? <Home toggleIsHome={toggleIsHome} /> :
        <Layout toggleIsHome={toggleIsHome} >
          <Element name="AboutMe" className="about-me-container"><AboutMe /></Element>
          <Element name="Education" className="education-container"><Education /></Element>
          <Element name="WorkExperience" className="work-experience-container"><WorkExperience /></Element>
          <Element name="Projects" className="projects-container"><Projects /></Element>
          <Element name="Contact" className="contact-container"><Contact /></Element>
        </Layout>}
    </>
  )
}

export default App
