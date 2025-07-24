import React from 'react';
import './Section.css';

function Section({ title, children }) {
  return (
    <section className="section">
      <h2 className="section-title">
        {title}
      </h2>
      <div className="section-content">
        {children}
      </div>
    </section>
  );
}

export default Section;