import Card from './Card';

const dataBaseCards = [
  { id: 9, 
    name: "MySQL", 
    img: "/img/mysql.png", 
    description: "관계형 DB",
    modalDescription: "경량 오픈소스 관계형 데이터베이스\n\n학습기간:\n2024.11.13~2024.12.09",
    type: "DB" },

  { id: 10, 
    name: "ORACLE",
    img: "/img/oracle.png", 
    description: "자바와 찰떡궁합",
    modalDescription: "기업용 상용 DBMS\nDB 안에서 저장된 명령어\n사용 가능\n\n학습기간:\n2025.02.19~", 
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