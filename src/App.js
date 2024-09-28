import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import Quote from "./component/Quote";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Quote />
      <Footer/>
    </div>
  );
}

export default App;
