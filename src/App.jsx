import Home from "./pages/Home/Home";
import Layout from "./components/Layout/Layout"
import AboutMe from './pages/AboutMe/AboutMe'
import Education from './pages/Education/Education'
import WorkExperience from './pages/WorkExperience/WorkExperience'
import Projects from './pages/Projects/Projects'
import Contact from './pages/Contact/Contact'
import { Element } from 'react-scroll';
import { useState } from "react";

function App() {

  const [isHome, setIsHome] = useState(false)

  const toggleIsHome = () => {
    setIsHome(!isHome)
  } 

  return (
    <>
      {isHome == true ? <Home toggleIsHome={toggleIsHome} /> :
        <Layout toggleIsHome={toggleIsHome}>
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
