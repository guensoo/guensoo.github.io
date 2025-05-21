import Card from './Card';

const dataBaseCards = [
  { id: 6, name: "ORACLE", img: "/img/oracle.png", description: "자바와 찰떡궁합", type: "DB" },
  { id: 9, name: "MySQL", img: "/img/mysql.png", description: "관계형 DB", type: "DB" },
];

function dataBase() {
  return (
    <>
      {dataBaseCards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </>
  );
}

export default dataBase;