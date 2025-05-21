import Card from './Card';

const dataBaseCards = [
  { id: 9, 
    name: "ORACLE",
    img: "/img/oracle.png", 
    description: "자바와 찰떡궁합",
    modalDescription: "자바와 찰떡궁합 DB\n\n프로시저 작성에 적합한 DBMS", 
    type: "DB" },
  { id: 10, 
    name: "MySQL", 
    img: "/img/mysql.png", 
    description: "관계형 DB",
    modalDescription: "관계형 DB\n\n가볍고 빠르며 오픈소스로 운영에 적합한 DBMS",
    type: "DB" },
];

function dataBase() {
  return (
    <div style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "20px",
      padding: "20px"
    }}>
      {dataBaseCards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
}

export default dataBase;