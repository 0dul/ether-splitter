import './App.css';
import Account from './components/Account';
import Avatar from './components/Avatar';
import logoGithub from './assets/GitHub_Logo_White.png'
import logoSplitter from './assets/logo.svg';
import pictureAlice from './assets/alice.svg';
import pictureBob from './assets/bob.svg';
import pictureCarol from './assets/carol.svg';
import React from 'react';

const App: React.FC = () => {

  return (
    <div className="splitter">
      <main className="splitter-content">
        <div className="grid-wrapper">
          <div className="item item-head">
            <Avatar
              name='Alice'
              picture={pictureAlice}
            />
            <span className="sub-item">
              <Account address='alice-account-address' />
            </span>
          </div>
          <div className="item item-middle">
            <img src={logoSplitter} className="item-logo" alt="logo" />
          </div>
          <div className="item item-foot-left">
            <Avatar
              name='Bob'
              picture={pictureBob}
            />
            <span className="sub-item">
              <Account address='bob-account-address' />
            </span>
          </div>
          <div className="item item-foot-right">
            <Avatar
              name='Carol'
              picture={pictureCarol}
            />
            <span className="sub-item">
              <Account address='carol-account-address' />
            </span>
          </div>
        </div>
      </main>
      <footer className="splitter-footer">
        <a
          className="splitter-link"
          href="https://github.com/0dul/ether-splitter"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            alt='GitHub'
            className="splitter-footer-logo"
            src={logoGithub}
          />
        </a>
      </footer>
    </div>
  );
}

export default App;
