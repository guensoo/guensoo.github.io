import Card from './Card';

const projectCards = [
  { id: 11, 
    name: "국비수업",
    img: "/img/aws.png", 
    description: "IT 공부의 과정",
    modalDescription: (
      <div>
        제가 배운 수업을<br />
        한 페이지에 정리했습니다!<br />
        <br />
        정리한 내용은{" "}
        <a
          href="https://glimmer-panda-a17.notion.site/1bae5c3f5d17806da208f08c1bf3bde2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>여기</strong>
        </a>
        서 확인해주세요
        <br />
        <br />
        공부기간:<br />
        2025.2.18~2025.8.00
      </div>
    ),
    type: "projects" },
  { id: 12, 
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
        2025.55.10~2025.00.00
      </div>
    ),
    type: "projects" },
 { id: 13, 
    name: "유기동물입양 웹", 
    img: "/img/mysql.png", 
    description: "첫 팀프로젝트",
    modalDescription: (
      <div>
        <br />
        <br />
        <br />
        작업기간:<br />
        2025.05.29~2025.00.00
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