import logo from './logo.svg';
import './App.css';
import Intro from './components/Intro';
import Frontend from './components/Frontend';
import Backend from './components/Backend';
import Section from './components/Section';
import DB from './components/DB'
import Project from './components/Project';

function App() {
  return (
    <div style={{ backgroundColor: "#f5f5f5", minHeight: "100vh", padding: "40px 0" }}>
      <div style={{
        backgroundColor: "#EAE3D4",
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "40px",
        borderRadius: "16px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)"
      }}>
        <Section title="최근수의 포트폴리오">
          <Intro />
        </Section>
        <hr className="section-divider" />
        <Section title="Study & Projects">
          <Project />
        </Section>
        <hr className="section-divider" />
        <Section title="SKILLS">
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
        <hr className="section-divider" />
        
      </div>
        <footer className="footer">
          &copy; Card UI adapted from&nbsp;
          <a href="https://github.com/simeydotme/pokemon-cards-css" target="_blank" rel="noopener noreferrer">
            pokemon-cards-css
          </a> (GPL-3.0)
        </footer>
    </div>
  );
}

export default App;
