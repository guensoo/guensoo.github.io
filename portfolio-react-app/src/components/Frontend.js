import Card from './Card';

const frontendCards = [
  { id: 1, name: "HTML", img: "/img/html.svg.png", description: "웹의 뼈대",
    modalDescription: "웹 페이지의 구조를\n설계하는 마크업 언어\n\n학습기간:\n2025.02.19~",
    type: "frontend" },
  { id: 2, name: "CSS", img: "/img/css.svg.png", description: "스타일링",
    modalDescription: "HTML 요소를 꾸미는\n스타일 시트 언어\n\n학습기간:\n2025.02.19~",
    type: "frontend" },
  { id: 3, name: "JavaScript", img: "/img/JavaScript.png", description: "로직 처리",
    modalDescription: "동적 기능과 로직 제어를\n위한 스크립트 언어\n\n학습기간:\n2025.02.19~",
    type: "frontend" },
  { id: 4, name: "React", img: "/img/logo512.png", description: "컴포넌트 기반",
    modalDescription: "컴포넌트 기반 UI\n상태관리, 라우팅, API 연동 등\n\n학습기간:\n2025.02.19~",
    type: "frontend" },
  { id: 5, name: "ReactNative", img: "/img/RN.png", description: "컴포넌트 기반",
    modalDescription: "앱 개발 프레임워크\nReact 기반 컴포넌트 & 이벤트 처리\n\n학습기간:\n2025.02.19~",
    type: "frontend" },
];

function Frontend() {
  return (
    <div style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "20px",
      padding: "20px"
    }}>
      {frontendCards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
}

export default Frontend;