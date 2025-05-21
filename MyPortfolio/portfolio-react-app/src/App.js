import logo from './logo.svg';
import './App.css';
import Intro from './components/Intro';
import Frontend from './components/Frontend';
import Backend from './components/Backend';
import Section from './components/Section';
import DB from './components/DB'

function App() {
  return (
    <div>
      <Section title="자기소개">
        <Intro />
      </Section>
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
    </div>
  );
}

export default App;
