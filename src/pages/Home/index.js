import React from 'react';

import Navbar from '~/components/Navbar';
import Banner from './Banner';
import About from './About';
import Newsletter from './Newsletter';
import Archive from './Archive';
import Post from './Post';

export default function Home() {
  return (
    <div className="siimple-content siimple-content-large siimple--px-2">
      <Navbar />
      <Banner />

      <main>
        <div className="siimple-grid-row">
          <div id="left-side" className="siimple-grid-col siimple-grid-col--3">
            <About />
            <Newsletter />
            <Archive />
          </div>

          <div id="right-side" className="siimple-grid-col siimple-grid-col--9">
            <Post />
            <Post />
            <Post />
          </div>
        </div>
      </main>

      <div className="siimple-rule siimple--mt-5" />

      <footer className="siimple--text-center siimple--py-4">
        <span className="siimple-small">© 2019 B9 Startup</span>
      </footer>
    </div>
  );
}
