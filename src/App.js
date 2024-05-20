import Header from "./components/header";
import Body from "./components/body";
import Food from "./components/food";
import Footer from "./components/footer";
import Testi from "./components/testimoni";
import About from "./components/about";
import ContactUs from "./components/contact";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Body />
      <Food />
      <About />
      <Testi />
      <ContactUs />
      <Footer />
    </div>
  );
};
export default App;
