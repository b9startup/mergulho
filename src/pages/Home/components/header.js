import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { signOut } from '~/store/modules/auth/actions';

export default function Header() {
    const dispatch = useDispatch();
    function SignOut() {
        dispatch(signOut());
    }
    return (
        <>
            <div className="siimple--clearfix">
                <div className="siimple--float-left">
                    <Link
                        to="/home"
                        className="siimple-navbar-title siimple--color-dark"
                    >
                        Blog title
                    </Link>
                </div>
                <div className="siimple--float-right">
                    <Link to="/home" className="siimple-btn siimple-btn--light">
                        About
                    </Link>
                    <Link
                        to="/home"
                        className="siimple-btn siimple-btn--light"
                        style={{ marginLeft: '10px' }}
                    >
                        Contact
                    </Link>
                    <button
                        type="button"
                        onClick={SignOut}
                        className="siimple-btn siimple-btn--light"
                        style={{ marginLeft: '10px' }}
                    >
                        Sair
                    </button>
                </div>
            </div>
        </>
    );
}
