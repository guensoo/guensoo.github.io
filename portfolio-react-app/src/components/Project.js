import Card from './Card';

const projectCards = [
  {
    id: 11,
    name: "국비수업",
    img: "/img/aws.png",
    description: "📘 국비 6개월 과정 정리",
    modalDescription: (
      <div>
        제가 배운 수업을<br />
        정리해 보았습니다!<br />
        Notion으로 정리한 내용은<br />
        아래에서 확인해주세요!
        <br />
        <br />
        📅 학습 기간:<br />
        2025.02.19~2025.08.07<br />
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
    type: "projects"
  },
  {
    id: 12,
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
        2025.05.10~2025.07.11<br />
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
    type: "projects"
  },
  {
    id: 13,
    name: "유기동물입양 웹",
    img: "/img/MainLogo.png",
    description: "첫 팀프로젝트",
    modalDescription: (
      <div>
        전국 유기동물 구조 현황<br />
        전국 보호소 위치도<br />
        내가 원하는 동물도<br />
        유기동물 입양 신청까지<br />
        <br />
        자세한 코드는{" "}
        깃허브에서<br />확인해주세요
        <br />
        <br />
        작업기간:<br />
        2025.06.09~2025.07.04.<br />
        <a href="http://teamproject-uka.s3-website.ap-northeast-2.amazonaws.com/" target="_blank" rel="noreferrer" style={{
          display: "inline-block",
          marginTop: "10px",
          padding: "8px 16px",
          backgroundColor: "#333",
          color: "#fff",
          borderRadius: "8px",
          textDecoration: "none"
        }}>💻 GitHub 코드 보기</a>
        <a href="https://github.com/guensoo/TeamPJ-UKA" target="_blank" rel="noreferrer" style={{
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
    type: "projects"
  },
  {
    id: 13,
    name: "OTT Movie Review",
    img: "/img/OMR_Main.png",
    description: "OTT/영화 리뷰 프로젝트",
    modalDescription: (
      <div>
        OTT와 영화의 리뷰를<br />
        앱으로 볼 수 있도록<br />
        준비되어있는!<br />
        유기동물 입양 신청까지<br />
        <br />
        자세한 코드는{" "}
        깃허브에서<br />확인해주세요
        <br />
        <br />
        작업기간:<br />
        2025.07.18~2025.08.05.<br />
        <a href="https://github.com/guensoo/TeamProject-OMR" target="_blank" rel="noreferrer" style={{
          display: "inline-block",
          marginTop: "10px",
          padding: "8px 16px",
          backgroundColor: "#333",
          color: "#fff",
          borderRadius: "8px",
          textDecoration: "none"
        }}>💻 GitHub 코드 보기</a>
      </div>
    ),
    type: "projects"
  },
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