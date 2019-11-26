import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { signInRequest } from '~/store/modules/auth/actions';

export default function SignIn() {
    const [pass, setPass] = useState([]);
    const [email, setEmail] = useState([]);

    const dispatch = useDispatch();

    function handleAdd(e) {
        e.preventDefault();
        dispatch(signInRequest(email, pass));
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
                        Use your email and password to sign in into our site
                    </p>

                    {/* FORMULARIO DE INPUTS */}
                    <form onSubmit={handleAdd} className="siimple-field">
                        <div className="siimple-field">
                            <p className="siimple-field-label">Your email</p>
                            <input
                                className="siimple-input siimple-input--fluid"
                                type="email"
                                placeholder="you@email.com"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="siimple-field">
                            <p className="siimple-field-label">Your password</p>

                            <input
                                className="siimple-input siimple-input--fluid"
                                type="password"
                                placeholder="password"
                                value={pass}
                                onChange={e => setPass(e.target.value)}
                            />
                            <span className="siimple-field-helper">
                                You password must contain at least 8 characters
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
                            Don't have an account?{' '}
                            <Link to="/" className="siimple-link">
                                Create an account
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
