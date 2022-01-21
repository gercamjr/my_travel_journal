import "./styles/styles.css";
import data from "./data";
import Entry from "./components/Entry";
import Navbar from "./components/Navbar";
import { useEffect } from "react";

function App() {
  const entries = data.map((entry) => <Entry {...entry} />);
  useEffect(() => {
    const script = document.createElement("script");
    script.innerHTML = `
    var swiper = new Swiper(".blog-slider", {
      spaceBetween: 30,
      effect: "fade",
      loop: true,
      mousewheel: {
        invert: false,
      },
      // autoHeight: true,
      pagination: {
        el: ".blog-slider__pagination",
        clickable: true,
      },
    })`;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="App">
      <Navbar />
      <main className="blog-slider">
        <div className="blog-slider__wrp swiper-wrapper">{entries}</div>
        <div className="blog-slider__pagination"></div>
      </main>
    </div>
  );
}

export default App;
