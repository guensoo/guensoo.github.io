import Card from './Card';

const projectCards = [
  { id: 11, 
    name: "쉼:터",
    img: "/img/shelter_logo.png", 
    description: "첫 개인프로젝트",
    modalDescription: "더위, 한파, 대피소\n모든것이 한개의\n프로젝트에!\n\n작업기간:\n2025.05.10~2025.00.00", 
    type: "projects" },
 { id: 12, 
    name: "팀프로젝트", 
    img: "/img/mysql.png", 
    description: "첫 팀프로젝트",
    modalDescription: "아직\n뭐할지 몰라요~\n\n작업기간:\n2025.00.00~2025.00.00",
    type: "projects" },
];

function Project() {
  return (
    <div style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "20px",
      padding: "20px"
    }}>
      {projectCards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
}

export default Project;