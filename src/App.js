import About from "./Components/About";
import Contact from "./Components/Contact";
import CoreOfferings from "./Components/CoreOfferings";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
// import Introduction from "./Components/Introduction";
// import Interested from "./Components/Interested";

function App() {
  return (
    <div className="bg-gradient-to-t from-black via-gray-900 to-gray-800 text-gray-300 min-h-screen">
        <Header />
        {/* <Introduction /> */}
        <About />
        <CoreOfferings />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
