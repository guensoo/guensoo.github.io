import logo from './logo.svg';
import './App.css';
import Card from './components/Card';

function App() {
  const cards = [
  { id: 1,
    name: "HTML",
    img: "/img/html.svg.png",
    description: "웹의 뼈대를 담당하는 마크업 언어",
    type: "frontend" },
  { id: 2,
    name: "CSS",
    img: "/img/css.svg.png",
    description: "스타일을 담당하는 스타일링 마스터",
    type: "frontend" },
  { id: 3,
    name: "JavaScript",
    img: "/img/JavaScript.png",
    description: "프론트엔드의 두뇌! 로직 처리 담당",
    type: "frontend" },
  { id: 4,
    name: "리액트",
    img: "/img/logo512.png",
    description: "컴포넌트 기반의 프레임워크",
    type: "frontend" },
  { id: 5,
    name: "Java",
    img: "/img/java.png",
    description: "백엔드의 핵심 언어",
    type: "backend" },
  { id: 6,
    name: "ORACLE",
    img: "/img/oracle.png",
    description: "자바와 찰떡궁합인 DBMS 시스템",
    type: "backend" },
  { id: 7,
    name: "스프링",
    img: "/img/springBoot.png",
    description: "백엔드를 구조화하는 프레임워크",
    type: "backend" },
  { id: 8,
    name: "C",
    img: "/img/c.png",
    description: "저수준 언어의 근본, 포인터의 세계",
    type: "backend" },
  { id: 9,
    name: "MySQL",
    img: "/img/mysql.png",
    description: "오픈소스 관계형 DB의 대표주자",
    type: "backend" },
  { id: 10,
    name: "Python",
    img: "/img/python.webp",
    description: "쉬운 문법으로 빠른 개발 가능",
    type: "backend" },
];
  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
}

export default App;
