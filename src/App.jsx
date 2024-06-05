import { useState } from "react";
import Home from "./pages/Home";
import AboutMe from './pages/AboutMe'
import Layout from "./components/Layout/Layout"

function App() {

  const [activeComponent, setActiveComponent] = useState('Home');

  const handleComponentChange = (name) => {
    setActiveComponent(name);
  };

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case 'Home':
        return <Home />;
      case 'AboutMe':
        return <AboutMe />;
      default:
        return <Home />;
    }
  };

  return (
    <Layout onChange={handleComponentChange}>
      {renderActiveComponent()}
    </Layout>
  )
}

export default App
