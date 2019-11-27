import React from 'react';

// import { Container } from './styles';

export default function Newsletter() {
  return (
    <div className="siimple--mb-2 siimple--pb-4">
      <div className="siimple-h4">Newsletter</div>

      <div className="siimple-paragraph siimple--text-justify">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt...
      </div>

      <form className="siimple-form">
        <input
          type="email"
          name="email"
          placeholder="seu@email.com"
          className="siimple-input siimple-input--fluid siimple--mb-2"
        />

        <button
          type="submit"
          className="siimple-btn siimple-btn--dark siimple-btn--fluid"
        >
          Inscrever-se
        </button>
      </form>
    </div>
  );
}
