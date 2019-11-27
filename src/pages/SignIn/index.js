import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { signInRequest } from '~/store/modules/auth/actions';

export default function SignIn() {
    const [pass, setPass] = useState('');
    const [email, setEmail] = useState('');

    const dispatch = useDispatch();

    function handleAdd(e) {
        e.preventDefault();
        dispatch(signInRequest(email, pass));
        setEmail('');
        setPass('');
    }

    return (
        <>
            <div className="siimple-content siimple-content--extra-small">
                <div className="siimple--px-5 siimple--py-5">
                    <div
                        className="siimple-h2 siimple--text-normal siimple--mb-1"
                        align="center"
                    >
                        Login
                    </div>
                    <p
                        className="siimple-paragraph siimple-paragraph--lead"
                        align="center"
                    >
                        Use seu e-mail e senha para acessar nosso site
                    </p>

                    {/* FORMULARIO DE INPUTS */}
                    <form onSubmit={handleAdd} className="siimple-field">
                        <div className="siimple-field">
                            <p className="siimple-field-label">E-mail</p>
                            <input
                                className="siimple-input siimple-input--fluid"
                                type="email"
                                placeholder="you@email.com"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="siimple-field">
                            <p className="siimple-field-label">Senha</p>

                            <input
                                className="siimple-input siimple-input--fluid"
                                type="password"
                                placeholder="password"
                                value={pass}
                                onChange={e => setPass(e.target.value)}
                            />
                            <span className="siimple-field-helper">
                                A senha deve ter no mínimo 8 caracteres
                            </span>
                        </div>
                        <button
                            type="submit"
                            className="siimple-btn siimple-btn--primary siimple-btn--fluid siimple--text-bold"
                        >
                            Login
                        </button>
                    </form>

                    {/* RODAPÈ */}
                    <div className="siimple-card siimple--mt-5" align="center">
                        <div className="siimple-card-body">
                            Ainda não tem conta?{' '}
                            <Link to="/signup" className="siimple-link">
                                Criar conta
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
