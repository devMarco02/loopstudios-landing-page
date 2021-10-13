import Nav from "./sections/Nav";
import Hero from "./sections/Hero";
import Branding from "./sections/Branding";
import Creations from "./sections/Creations";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./sections/Footer";
import "./stylesheets/main.scss";

function App() {
  return (
    <Router>
      <Nav isBtn={true} />
      <main className="home">
        <Hero />
        <Branding />
        <Creations />
      </main>
      <Footer />
    </Router>
  );
}

export default App;
