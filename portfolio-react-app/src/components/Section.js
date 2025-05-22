function Section({ title, children }) {
  const key = title.toLowerCase(); // 소문자로 통일

  const fontSizeMap = {
    'skills': 30,
    '최근수의 포트폴리오': 26,
    'projects': 26,
    'front-end': 26,
    'back-end': 26,
    'dbms': 26,
  };

  const fontSize = fontSizeMap[key] || 26;

  return (
    <section style={{ margin: '40px 0' }}>
      <h2 style={{
        fontSize: `${fontSize}px`,
        fontWeight: "bold",
        marginBottom: "20px",
        textAlign: 'center',
        color: "#333"
      }}>
        {title}
      </h2>
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center"
      }}>
        {children}
      </div>
    </section>
  );
}

export default Section;
