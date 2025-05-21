function Section({ title, children }) {
  return (
    <section style={{ margin: '40px 0' }}>
      <h2 style={{ textAlign: 'center' }}>{title}</h2>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {children}
      </div>
    </section>
  );
}

export default Section;