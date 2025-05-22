import Card from './Card';

const backendCards = [
  { id: 5, name: "C", img: "/img/c.png", description: "컴퓨팅 언어의 근본", 
    modalDescription: "컴퓨터 구조와 포인터\n개념 학습에 적합한\n저수준 언어\n\n학습기간:\n2024.10.16~2024.11.11",
    type: "backend" },
  { id: 6, name: "Python", img: "/img/python.webp", description: "쉽고 빠른 개발", 
    modalDescription: "간결한 문법으로 데이터 처리와 빠른 학습에\n적합한 언어\n\n학습기간:\n2024.12.10~2025.02.13",
    type: "backend" },
  { id: 7, name: "Java", img: "/img/java.png", description: "백엔드 핵심",
    modalDescription: "객체지향 기반의\n백엔드 프로그래밍 언어\n\n학습기간:\n2025.02.19~",
    type: "backend" },
  { id: 8, name: "스프링", img: "/img/springBoot.png", description: "백엔드 프레임워크",
    modalDescription: "REST API 구현에 적합한\nJava 기반 프레임워크\n\n학습기간:\n2025.02.19~",
    type: "backend" },
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