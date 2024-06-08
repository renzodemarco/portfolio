import Home from "./pages/Home";
import AboutMe from './pages/AboutMe'
import Layout from "./components/Layout/Layout"
import WorkExperience from "./pages/WorkExperience";
import { useSelector } from "react-redux";

function App() {

  const activeComponent = useSelector(state => state.activeComponent);

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case 'Home':
        return <Home />;
      case 'AboutMe':
        return <AboutMe />;
      case 'WorkExperience':
        return <WorkExperience />;
      default:
        return <Home />;
    }
  };

  return (
    <Layout>
      {renderActiveComponent()}
    </Layout>
  )
}

export default App
