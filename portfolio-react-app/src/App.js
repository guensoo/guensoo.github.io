import React from 'react';
import './App.css';
import Intro from './components/Intro';
import Frontend from './components/Frontend';
import Backend from './components/Backend';
import Section from './components/Section';
import DB from './components/DB'
import Project from './components/Project';
import Study from './components/Study';

function App() {
  return (
    <div className="app-container">
      <div className="main-wrapper">
        <div className="content-card">
          <div className="content-inner">
            
            <Section title="최근수의 포트폴리오">
              <Intro />
            </Section>
            
            <hr className="section-divider" />

            <Section title="Study">
              <Study />
            </Section>
            
            <Section title="Projects">
              <Project />
            </Section>
            
            <hr className="section-divider" />
            
            <Section title="Front-end">
              <Frontend />
            </Section>
            
            <hr className="section-divider" />
            
            <Section title="Back-end">
              <Backend />
            </Section>
            
            <hr className="section-divider" />
            
            <Section title="DBMS">
              <DB />
            </Section>
            
          </div>
        </div>
        
        <footer className="footer">
          &copy; Card UI adapted from&nbsp;
          <a href="https://github.com/simeydotme/pokemon-cards-css" target="_blank" rel="noopener noreferrer">
            pokemon-cards-css
          </a> (GPL-3.0)
        </footer>
      </div>
    </div>
  );
}

export default App;