
import Header from "./components/Header";
import Hero from "./components/Hero";
import Project from "./components/Project";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-black min-h-screen font-sans">
      <Header />
      <Hero />
      <Project />
      <Footer />
    </div>
  );
};

export default App;