import React from 'react';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

export default function Archive() {
  return (
    <div>
      <div className="siimple-h4">Arquivo</div>

      <Link to="/" className="siimple-grid siimple-grid--col-12 siimple-link">
        Maio 2018
      </Link>
      <Link to="/" className="siimple-grid siimple-grid--col-12 siimple-link">
        Abril 2018
      </Link>
      <Link to="/" className="siimple-grid siimple-grid--col-12 siimple-link">
        Março 2018
      </Link>
      <Link to="/" className="siimple-grid siimple-grid--col-12 siimple-link">
        Fevereiro 2018
      </Link>
      <Link to="/" className="siimple-grid siimple-grid--col-12 siimple-link">
        Janeiro 2018
      </Link>
      <Link to="/" className="siimple-grid siimple-grid--col-12 siimple-link">
        Dezembro 2018
      </Link>
    </div>
  );
}
