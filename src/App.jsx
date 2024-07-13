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
import PhotoGallery from "./components/Gallery";

function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="ContainerAll">
      <div className="container-content">
        <Header />
        <div className="background-image" id="home"></div>
        <div className="overlay"></div>

        <main>
          <div>
            <section className="sobre" id="sobre">
              <img src={logo} alt="Logo" />
              <h2 className="slogan">
                Aqui o sistema é bruto rústico e sistemático! A maior equipe da
                região.
              </h2>
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
              Originário da charmosa cidade de Mar de Espanha, situada no
              coração de Minas Gerais, nosso movimento foi fundado por Fábio de
              Paula, um jovem de 28 anos apaixonado pela vida no campo e pelos
              animais. Com raízes profundamente fincadas na cultura rural, Fábio
              transformou sua paixão em um movimento vibrante que celebra as
              tradições e a beleza da vida na roça. Nosso foco principal é
              organizar cavalgadas e encontros de cavaleiros e amazonas,
              promovendo momentos de confraternização, amizade e conexão com a
              natureza. Cada evento é uma oportunidade única para experimentar a
              liberdade das cavalgadas, compartilhar histórias e fortalecer os
              laços comunitários. Junte-se a nós e faça parte desta jornada,
              onde a tradição e a modernidade se encontram em harmonia, criando
              memórias inesquecíveis e celebrando a cultura rural brasileira.
            </section>
          </div>
          <div id="galeria">
            <PhotoGallery />
          </div>
          <div id="agenda">
            <h2>Próximos Eventos</h2>
            <EventAgenda />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
