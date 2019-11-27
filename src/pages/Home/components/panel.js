import React from 'react';
import { Link } from 'react-router-dom';

export default function Panel() {
    return (
        <>
            <div className="siimple-jumbotron siimple-jumbotron--dark siimple--px-5 siimple--mb-4 siimple--rounded">
                <div className="siimple-jumbotron-title">
                    Welcome to my blog
                </div>
                <div className="siimple-jumbotron-detail">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
                <div className="siimple--mt-3">
                    <Link
                        to="/home"
                        className="siimple-btn siimple--bg-white siimple--color-dark"
                    >
                        Read <strong>more</strong>...
                    </Link>
                </div>
            </div>
        </>
    );
}
