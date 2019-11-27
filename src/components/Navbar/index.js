import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { signOut } from '~/store/modules/auth/actions';

export default function Navbar() {
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <header className="siimple-navbar siimple--width-100 siimple--mwidth-100 siimple--pl-0">
      <Link className="siimple-navbar-title" to="/">
        B9 Startup
      </Link>

      <nav className="siimple--float-right">
        <Link
          to="/sobre"
          className="siimple-btn siimple-btn--light siimple--mr-1"
        >
          Sobre
        </Link>
        <Link
          to="/contato"
          className="siimple-btn siimple-btn--light siimple--mr-1"
        >
          Contato
        </Link>

        <button
          onClick={handleSignOut}
          className="siimple-btn siimple-btn--error"
          type="button"
        >
          Sair
        </button>
      </nav>

      <div className="siimple-rule" />
    </header>
  );
}
