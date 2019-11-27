import React from 'react';

import Header from './components/header';
import Panel from './components/panel';
import About from './components/about';
import News from './components/newsletter';
import Archive from './components/archive';
import Posts from './components/posts';
import Footer from './components/footer';

export default function Home() {
    return (
        <>
            <div className="siimple-content siimple-content--large">
                <Header />
                <div className="siimple-rule" />
                <Panel />
                <div className="siimple-grid blog-content">
                    <div className="siimple-grid-row">
                        <div className="siimple-grid-col siimple-grid-col--3">
                            <About />
                            <News />
                            <Archive />
                        </div>
                        <Posts />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
