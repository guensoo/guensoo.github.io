import Card from './Card';

const projectCards = [
  { id: 11, 
    name: "국비수업",
    img: "/img/aws.png", 
    description: "📘 국비 6개월 과정 정리",
    modalDescription: (
      <div>
        제가 배운 수업을<br />
        정리해 보았습니다!<br />
        Notion으로 정리한 내용은<br/>
        아래에서 확인해주세요!
        <br />
        <br />
        📅 학습 기간:<br />
        2025.02.18~2025.08.05
        <a href="https://glimmer-panda-a17.notion.site/1bae5c3f5d17806da208f08c1bf3bde2" target="_blank" rel="noreferrer" style={{
          display: "inline-block",
          marginTop: "10px",
          padding: "8px 16px",
          backgroundColor: "#333",
          color: "#fff",
          borderRadius: "8px",
          textDecoration: "none"
        }}>
          📄 Notion 정리 보기
        </a>
        <a href="https://github.com/guensoo/AWS-Full_stack_developer_traning" target="_blank" rel="noreferrer" style={{
          display: "inline-block",
          marginTop: "10px",
          padding: "8px 16px",
          backgroundColor: "#333",
          color: "#fff",
          borderRadius: "8px",
          textDecoration: "none"
        }}>
          💻 GitHub 코드 보기
        </a>
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
        모든 것이 한 개의
        프로젝트에!
        <br />
        자세한 코드는{" "}
        깃허브에서<br />확인해주세요
        <br />
        <br />
        작업기간:<br />
        2025.05.10~2025.00.00<br />
        <a href="https://github.com/guensoo/ShelterApp" target="_blank" rel="noreferrer" style={{
          display: "inline-block",
          marginTop: "10px",
          padding: "8px 16px",
          backgroundColor: "#333",
          color: "#fff",
          borderRadius: "8px",
          textDecoration: "none"
        }}>💻 GitHub 코드 보기</a>
        <a href="https://www.shelter.io.kr/" target="_blank" rel="noreferrer" style={{
          display: "inline-block",
          marginTop: "10px",
          padding: "8px 16px",
          backgroundColor: "#333",
          color: "#fff",
          borderRadius: "8px",
          textDecoration: "none"
        }}>
          💻 웹 페이지 보기
        </a>
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