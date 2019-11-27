import React from 'react';

export default function News() {
    return (
        <>
            <div className="siimple--pt-4 siimple--pb-4">
                <div className="siimple-h4 siimple--mb-2">Newsletter</div>
                <div className="siimple-paragraph siimple--mb-2 siimple--text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt...
                </div>
                <input
                    type="email"
                    className="siimple-input siimple-input--fluid"
                    placeholder="you@email.com"
                />
                <div className="siimple-btn siimple-btn--dark siimple-btn--fluid siimple--mt-1">
                    Subscribe
                </div>
            </div>
        </>
    );
}
