import Card from './Card';

const backendCards = [
  { id: 5, name: "Java", img: "/img/java.png", description: "백엔드 핵심", type: "backend" },
  { id: 6, name: "스프링", img: "/img/springBoot.png", description: "백엔드 프레임워크", type: "backend" },
  { id: 7, name: "C", img: "/img/c.png", description: "컴퓨팅 언어 근본", type: "backend" },
  { id: 8, name: "Python", img: "/img/python.webp", description: "빠른 개발", type: "backend" },
];

function Backend() {
  return (
    <div style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "20px",
      padding: "20px"
    }}>
      {backendCards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
}

export default Backend;