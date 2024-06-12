import Home from "./pages/Home/Home";
import AboutMe from './pages/AboutMe/AboutMe'
import Layout from "./components/Layout/Layout"
import WorkExperience from "./pages/WorkExperience/WorkExperience";
import Education from './pages/Education/Education'
import Projects from './pages/Projects/Projects'
import Contact from "./pages/Contact/Contact";
import { useSelector } from "react-redux";

function App() {

  const activeComponent = useSelector(state => state.activeComponent);

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case 'Home':
        return <Home />;
      case 'AboutMe':
        return <AboutMe />;
      case 'Education':
        return <Education />;
      case 'WorkExperience':
        return <WorkExperience />;
      case 'Projects':
        return <Projects />;
      case 'Contact':
        return <Contact />;
      default:
        return <AboutMe />;
    }
  };

  return (
    <>
      {activeComponent === 'Home' ? <Home /> :
        <Layout>
          {renderActiveComponent()}
        </Layout>}
    </>
  )
}

export default App
