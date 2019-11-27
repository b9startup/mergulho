import React from 'react';

// import { Container } from './styles';

export default function Banner() {
  return (
    <div className="siimple-jumbotron siimple-jumbotron--dark siimple--mt-3 siimple--px-5 siimple--rounded">
      <div className="siimple-jumbotron-title">Bem vindo ao blog</div>

      <div className="siimple-jumbotron-detail">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </div>

      <div className="siimple--mt-3">
        <button
          type="button"
          className="siimple-btn siimple-bg--white siimple-color--dark"
        >
          Ler mais...
        </button>
      </div>
    </div>
  );
}
