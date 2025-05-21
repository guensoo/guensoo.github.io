import Card from './Card';

const frontendCards = [
  { id: 1, name: "HTML", img: "/img/html.svg.png", description: "웹의 뼈대", type: "frontend" },
  { id: 2, name: "CSS", img: "/img/css.svg.png", description: "스타일링", type: "frontend" },
  { id: 3, name: "JavaScript", img: "/img/JavaScript.png", description: "로직 처리", type: "frontend" },
  { id: 4, name: "리액트", img: "/img/logo512.png", description: "컴포넌트 기반", type: "frontend" },
];

function Frontend() {
  return (
    <>
      {frontendCards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </>
  );
}

export default Frontend;