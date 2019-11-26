import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="siimple-content siimple-content--extra-small">
      <div className="siimple--px-5 siimple--py-5">
        <div
          className="siimple-h2 siimple--text-normal siimple--mb-1"
          align="center"
        >
          Login
        </div>
        <div
          className="siimple-paragraph siimple-paragraph--lead"
          align="center"
        >
          Use seu e-mail e senha para se autenticar.
        </div>

        <div className="siimple-form">
          <div className="siimple-field">
            <div className="siimple-field-label">Seu e-mail</div>
            <input
              type="email"
              placeholder="seu@email.com"
              name="email"
              className="siimple-input siimple-input--fluid"
            />
          </div>

          <div className="siimple-field">
            <div className="siimple-field-label">Sua senha</div>
            <input
              type="password"
              placeholder="Sua senha"
              name="password"
              className="siimple-input siimple-input--fluid"
            />
            <div className="siimple-field-helper">
              Sua senha deve conter pelo menos 8 caracteres.
            </div>
          </div>

          <div className="siimple-btn siimple-btn--primary siimple-btn--fluid">
            Entrar
          </div>
        </div>

        <div className="siimple-card" align="center">
          <div className="siimple-card-body">
            Ainda não possui conta?{' '}
            <Link to="/login" className="siimple-link">
              Crie agora!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
