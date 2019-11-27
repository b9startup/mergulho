import React from 'react';
import { Link } from 'react-router-dom';

export default function Archive() {
    return (
        <>
            <div className="siimple--pt-4 siimple--pb-4">
                <div className="siimple-h4 siimple--mb-2">Archive</div>
                <div className="siimple-paragraph">
                    <Link to="/home" className="siimple-link">
                        May 2019
                    </Link>
                    <br />
                    <Link to="/home" className="siimple-link">
                        April 2019
                    </Link>
                    <br />
                    <Link to="/home" className="siimple-link">
                        March 2019
                    </Link>
                    <br />
                    <Link to="/home" className="siimple-link">
                        February 2019
                    </Link>
                    <br />
                    <Link to="/home" className="siimple-link">
                        January 2019
                    </Link>
                    <br />
                    <Link to="/home" className="siimple-link">
                        December 2018
                    </Link>
                </div>
            </div>
        </>
    );
}
