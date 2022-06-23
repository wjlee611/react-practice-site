import styled from "styled-components";
import MainListBtn from "../components/MainListBtn";
import bgImage from "../images/bg.png";
import iconImage from "../images/prts.png";

const Background = styled.div`
  background-image: url(${bgImage});
  background-size: cover;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  position: relative;
`;
const InfoWrap = styled.div`
  width: 40%;
  height: 100vh;
  background-color: ${"#00000055"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 100px;
  color: white;
  & > img:first-child {
    width: 150px;
    height: 150px;
    margin-bottom: 20px;
  }
  & > span:nth-child(2) {
    font-size: 20px;
    font-weight: 200;
    margin-left: 30px;
  }
  & > h1:nth-child(3) {
    font-size: 40px;
    font-weight: 700;
    margin-left: 30px;
  }
  & > span:nth-child(4) {
    font-size: 15px;
    font-weight: 200;
    margin-left: 30px;
  }
  & > h2:nth-child(5) {
    font-size: 25px;
    margin-left: 30px;
  }
`;
const ListWrap = styled.div`
  width: 60%;
  height: 100vh;
  overflow-y: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
  background-color: ${"#00000055"};
`;
const BtnList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0;
`;

const projectList = [
  { name: "프로젝트1", stacks: ["HTML", "CSS"] },
  { name: "콩콩", stacks: ["Python"] },
  { name: "no.3", stacks: ["HTML", "CSS", "Javascript"] },
  { name: "project 4", stacks: ["React"] },
  { name: "5오", stacks: ["node.js"] },
  { name: "666666", stacks: ["Python"] },
  { name: "777ucky", stacks: ["React", "node.js"] },
];

function Home() {
  return (
    <Background>
      <InfoWrap>
        <img src={iconImage} />
        <span>Accessing...</span>
        <h1>Projects Archive</h1>
        <span>Dev.</span>
        <h2>Woong</h2>
      </InfoWrap>
      <ListWrap>
        <BtnList>
          {projectList.map((item, index) => (
            <MainListBtn key={index} index={index} proj={item} />
          ))}
        </BtnList>
      </ListWrap>
    </Background>
  );
}

export default Home;
