import Home from "./pages/Home/Home";
import Layout from "./components/Layout/Layout"
import AboutMe from './pages/AboutMe/AboutMe'
import Education from './pages/Education/Education'
import WorkExperience from './pages/WorkExperience/WorkExperience'
import Projects from './pages/Projects/Projects'
import Contact from './pages/Contact/Contact'
import { useSelector } from "react-redux";
import { Element, scroller } from 'react-scroll';
import { useEffect } from "react";

function App() {

  const activeComponent = useSelector(state => state.activeComponent);

  const scrollToSection = (section) => {
    scroller.scrollTo(section, {
      vertical: true,
      duration: 500,
      delay: 0,
      containerId: 'scroll-container',
      smooth: 'ease'
    });
  };

  useEffect(() => {
    if (activeComponent) {
      scrollToSection(activeComponent);
    }
  }, [activeComponent]);

  return (
    <>
      {activeComponent === 'Home' ? <Home /> :
        <Layout>
          <Element name="AboutMe"><AboutMe /></Element>
          <Element name="Education"><Education /></Element>
          <Element name="WorkExperience"><WorkExperience /></Element>
          <Element name="Projects"><Projects /></Element>
          <Element name="Contact"><Contact /></Element>
        </Layout>}
    </>
  )
}

export default App
