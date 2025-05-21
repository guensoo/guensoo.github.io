import Card from './Card';

const introCard = {
  id: 0,
  name: "자기 소개",
  img: "/img/profile.png",
  description: "풀스택 개발자를 꿈꾸는 최근수 입니다.",
  type: "intro"
};

function Intro() {

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "40px",
      padding: "20px"
    }}>

      <Card card={introCard} />

      {/* 텍스트 소개 */}
      <div style={{
        maxWidth: "400px",
        textAlign: "left",
        lineHeight: "1.6",
        fontSize: "1.1rem"
      }}>
        <h2>안녕하세요!</h2>
        <p>저는 풀스택을 공부중인 <strong>최근수</strong>입니다.<br />
        개발자가 되기 위해 국비과정과 사이버대학에서 열심히 공부를 하고 있습니다.</p>
        <p>React, SpringBoot, Java, Oracle을 활용한 웹, 앱 프로젝트를 진행하고 있으며,<br />
        더위 및 한파 쉼터 같은 실생활 기반 프로젝트에도 관심이 많습니다.</p>
        <a href="https://github.com/guensoo" target="_blank" rel="noreferrer" style={{
          display: "inline-block",
          marginTop: "10px",
          padding: "8px 16px",
          backgroundColor: "#333",
          color: "#fff",
          borderRadius: "8px",
          textDecoration: "none"
        }}>
          🔗 GitHub 바로가기
        </a>
      </div>
    </div>
  );
}

export default Intro;