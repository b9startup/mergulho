import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { signUpRequest } from '~/store/modules/auth/actions';

export default function Login() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit() {
    dispatch(signUpRequest(name, email, password));
  }

  return (
    <div className="siimple-content siimple-content--extra-small">
      <div className="siimple--px-5 siimple--py-5">
        <div
          className="siimple-h2 siimple--text-normal siimple--mb-1"
          align="center"
        >
          Cadastro
        </div>
        <div
          className="siimple-paragraph siimple-paragraph--lead"
          align="center"
        >
          Cadastre-se utilizando um nome, e-mail e senha.
        </div>

        <div className="siimple-form">
          <div className="siimple-field">
            <div className="siimple-field-label">Seu nome</div>
            <input
              type="text"
              placeholder="John Doe"
              name="name"
              className="siimple-input siimple-input--fluid"
              onChange={e => setName(e.target.value)}
            />
          </div>

          <div className="siimple-field">
            <div className="siimple-field-label">Seu e-mail</div>
            <input
              type="email"
              placeholder="seu@email.com"
              name="email"
              className="siimple-input siimple-input--fluid"
              onChange={e => setEmail(e.target.value)}
            />
          </div>

          <div className="siimple-field">
            <div className="siimple-field-label">Sua senha</div>
            <input
              type="password"
              placeholder="Sua senha"
              name="password"
              className="siimple-input siimple-input--fluid"
              onChange={e => setPassword(e.target.value)}
            />
            <div className="siimple-field-helper">
              Sua senha deve conter pelo menos 8 caracteres.
            </div>
          </div>

          <div
            className="siimple-btn siimple-btn--primary siimple-btn--fluid"
            onClick={handleSubmit}
          >
            {loading ? (
              <div className="siimple-spinner siimple-spinner--light siimple--my-1" />
            ) : (
              'Criar'
            )}
          </div>
        </div>

        <div className="siimple-card" align="center">
          <div className="siimple-card-body">
            Já possui conta?{' '}
            <Link to="/login" className="siimple-link">
              Faça login!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
