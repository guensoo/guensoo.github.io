import Card from './Card';

const projectCards = [
  { id: 11, 
    name: "쉼:터",
    img: "/img/shelter_logo.png", 
    description: "첫 개인프로젝트",
    modalDescription: (
      <div>
        더위, 한파, 대피소<br />
        모든 것이 한 개의<br />
        프로젝트에!<br />
        <br />
        자세한 코드는{" "}
        <a
          href="https://github.com/guensoo/ShelterApp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>여기</strong>
        </a>
        서 확인해주세요
        <br />
        <br />
        작업기간:<br />
        2025.05.10~2025.00.00
      </div>
    ),
    type: "projects" },
 { id: 12, 
    name: "팀프로젝트", 
    img: "/img/mysql.png", 
    description: "첫 팀프로젝트",
    modalDescription: (
      <div>
        아직<br />
        뭐할지 몰라요~<br />
        <br />
        작업기간:<br />
        2025.00.00~2025.00.00
      </div>
    ),
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