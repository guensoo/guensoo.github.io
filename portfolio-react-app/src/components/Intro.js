import Card from './Card';

const introCard = {
  id: 0,
  name: "자기 소개",
  img: "/img/tmp.png",
  description: "풀스택 개발자를 향하여",
  modalDescription: (
    <div className="compact-lines">
    <div><strong>Email :</strong> chgs9079@naver.com</div>
    <div><strong>Phone :</strong> 010-9960-6797</div>
    <div><strong>학력 :</strong> 2022.03 ~ 재학<br/>
    고려사이버대학교 컴퓨터공학과</div>
    <div><strong>병역 :</strong> 해병대 중사 단기복무 전역</div>
    <div><strong>경력 :</strong> 2019.04 ~ 2024.11<br/>대한민국 해병대 부사관</div>
  </div>
  ),
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
        <p style={{
          fontSize: "0.9rem",      // 작게
          fontWeight: "normal",    // em 대신 일반 굵기
          fontStyle: "italic",     // em 느낌을 유지하고 싶다면 이거 유지
          color: "#444"            // 부드러운 회색톤 추천
        }}>
          카드를 클릭하면 상세내용을 볼 수 있습니다.<br/>
          모바일에서는 제대로 구현되지 않을 수 있습니다.<br/>
          모바일은 2025. 5. 22 기준 배우는 중입니다!<br/>
          추후 업데이트 예정입니다!!
        </p>
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