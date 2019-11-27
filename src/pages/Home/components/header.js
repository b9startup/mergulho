import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
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
                    <Link
                        to="/home"
                        className="siimple-btn siimple-btn--light"
                        style={{ marginLeft: '10px' }}
                    >
                        Sair
                    </Link>
                </div>
            </div>
        </>
    );
}
