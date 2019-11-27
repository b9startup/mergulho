import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { signUpRequest } from '~/store/modules/signup/actions';

export default function SignUp() {
    const [pass, setPass] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

    const dispatch = useDispatch();
    function handleAdd(e) {
        e.preventDefault();
        dispatch(signUpRequest(name, email, pass));
    }

    return (
        <>
            <div className="siimple-content siimple-content--extra-small">
                <div className="siimple--px-5 siimple--py-5">
                    <div
                        className="siimple-h2 siimple--text-normal siimple--mb-1"
                        align="center"
                    >
                        Criar Conta
                    </div>

                    {/* FORMULARIO DE INPUTS */}
                    <form
                        onSubmit={handleAdd}
                        className="siimple-field"
                        style={{ marginTop: '50px' }}
                    >
                        <div className="siimple-field">
                            <p className="siimple-field-label">Nome:</p>
                            <input
                                className="siimple-input siimple-input--fluid"
                                type="text"
                                placeholder="Seu Nome"
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                        </div>

                        <div className="siimple-field">
                            <p className="siimple-field-label">E-mail:</p>
                            <input
                                className="siimple-input siimple-input--fluid"
                                type="email"
                                placeholder="you@email.com"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="siimple-field">
                            <p className="siimple-field-label">Senha:</p>

                            <input
                                className="siimple-input siimple-input--fluid"
                                type="password"
                                placeholder="password"
                                value={pass}
                                onChange={e => setPass(e.target.value)}
                            />
                            <span className="siimple-field-helper">
                                A senha precisa ter no mínimo 8 caracteres
                            </span>
                        </div>
                        <button
                            style={{ marginTop: '30px' }}
                            type="submit"
                            className="siimple-btn siimple-btn--primary siimple-btn--fluid siimple--text-bold"
                        >
                            Login
                        </button>
                    </form>

                    {/* RODAPÈ */}
                    <div className="siimple-card siimple--mt-5" align="center">
                        <div className="siimple-card-body">
                            Voltar para área de login{' '}
                            <Link to="/" className="siimple-link">
                                Login
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
