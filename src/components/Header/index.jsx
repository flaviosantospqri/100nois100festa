import React from "react";
import { Container } from "./style";

export const Header = () => {
  return (
    <Container>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#sobre">Sobre</a>
        </li>
        <li>
          <a href="#agenda">Agenda</a>
        </li>
        <li>
          <a href="#galeria">Galeria</a>
        </li>
        <li>
          <a href="#contato">Contato</a>
        </li>
      </ul>
    </Container>
  );
};
