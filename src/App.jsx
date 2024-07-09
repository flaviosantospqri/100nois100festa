import React from "react";
import "./index.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Header } from "./components/Header";
import logo from "./assets/file.jpg";
import img1 from "./assets/carrossel/1.jpg";
import img2 from "./assets/carrossel/2.jpg";
import img3 from "./assets/carrossel/3.jpg";
import img4 from "./assets/carrossel/4.jpg";
import EventAgenda from "./components/eventAgenda";
import Footer from "./components/footer";

function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <>
      <div className="container-content">
        <Header />
        <div className="background-image" id="home"></div>
        <div className="overlay"></div>

        <main>
          <div>
            <section className="sobre" id="sobre">
              <img src={logo} alt="Logo" />
              <p>
                Aqui o sistema é bruto rústico e sistemático! A maior equipe da
                região.
              </p>
              <section className="carrossel">
                <Slider {...settings}>
                  <div className="content-carrossel">
                    <img className="slide" src={img1} alt="Slide 1" />
                  </div>
                  <div className="content-carrossel">
                    <img className="slide" src={img2} alt="Slide 2" />
                  </div>
                  <div className="content-carrossel">
                    <img className="slide" src={img3} alt="Slide 3" />
                  </div>
                  <div className="content-carrossel">
                    <img className="slide" src={img4} alt="Slide 4" />
                  </div>
                </Slider>
              </section>
            </section>
          </div>
          <div className="content-sobre">
            <h1>Sobre</h1>
            <section className="text-sobre">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a
              lobortis lorem. Vestibulum eu augue tempor, sagittis ipsum eget,
              dignissim felis. Nam vulputate tellus sed arcu egestas, sit amet
              rhoncus est cursus. Ut maximus arcu gravida ligula venenatis, eu
              pellentesque magna tempus. Integer malesuada suscipit sapien ac
              vulputate. Donec a luctus odio, eget rhoncus metus. Morbi a
              euismod purus. Duis hendrerit facilisis tellus, id venenatis massa
              varius sed. Phasellus feugiat molestie velit sed posuere. Fusce
              mattis et mi id pulvinar.
            </section>
          </div>
          <div id="agenda">
            <h2>Próximos Eventos</h2>
            <EventAgenda />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
