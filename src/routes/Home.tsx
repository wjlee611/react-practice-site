import { useState } from "react";
import styled from "styled-components";
import MainListBtn from "../components/MainListBtn";
import bgImage from "../images/bg.png";
import iconImage from "../images/prts.png";
import styles from "../css/Home.module.css";

const Background = styled.div`
  background-image: linear-gradient(
      rgba(0, 0, 0, 0.6),
      rgba(200, 200, 200, 0.3)
    ),
    url(${bgImage});
  background-size: cover;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  position: relative;
`;
const FrontGradBG = styled.div<{ className: any }>`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: absolute;
  background: ${"linear-gradient(0deg, #000000ff 0%, #00000000 20% 92%, #000000ff 100%)"};
  z-index: 2;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 50px;
  & > div {
    width: 90%;
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid white;
    color: white;
    font-size: 15px;
    font-weight: 400;
  }
`;
const InfoWrap = styled.div<{ className: any; isLoading: boolean | "loading" }>`
  width: 40%;
  height: ${(props) => (props.isLoading === true ? "300px" : "100px")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 100px;
  color: white;
  z-index: 1;
  position: relative;
  & > * {
    position: absolute;
    left: 100px;
  }
  //logo
  & > img:first-child {
    width: 150px;
    height: 150px;
    margin-bottom: 20px;
    top: 0;
  }
  //Accessing...
  & > span:nth-child(2) {
    font-size: 20px;
    font-weight: 200;
    margin-left: 30px;
    top: 160px;
  }
  //Projects Archive
  & > div:nth-child(3) {
    display: flex;
    font-size: 40px;
    font-weight: 700;
    margin-left: 28px;
    top: 180px;
    & > h1:last-child {
      font-weight: 300;
      margin-left: 10px;
    }
  }
  //Dev.
  & > span:nth-child(4) {
    font-size: 15px;
    font-weight: 200;
    margin-left: 30px;
    top: 220px;
  }
  //Woong
  & > h2:nth-child(5) {
    font-size: 25px;
    margin-left: 30px;
    top: 235px;
  }
  //_
  & > span:nth-child(6) {
    font-size: 40px;
    font-weight: 300;
    margin-left: 30px;
    top: 177px;
    left: 375px;
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
  z-index: 1;
`;
const BtnList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  padding-bottom: 200px;
`;

//For testing loading animation
const LoadBtn = styled.button`
  position: absolute;
  top: 100px;
  left: 50px;
  z-index: 3;
`;

const projectList = [
  { name: "프로젝트1", stacks: ["HTML", "CSS"] },
  { name: "콩콩", stacks: ["Python"] },
  { name: "no.3", stacks: ["HTML", "CSS", "Javascript"] },
  { name: "project 4", stacks: ["React"] },
  { name: "5오", stacks: ["node.js"] },
  { name: "666666", stacks: ["Python"] },
  { name: "777ucky", stacks: ["React", "node.js"] },
  { name: "etc temp data", stacks: ["etc", "temp", "data"] },
  { name: "etc temp data", stacks: ["etc", "temp", "data"] },
  { name: "etc temp data", stacks: ["etc", "temp", "data"] },
  { name: "etc temp data", stacks: ["etc", "temp", "data"] },
  { name: "etc temp data", stacks: ["etc", "temp", "data"] },
  { name: "etc temp data", stacks: ["etc", "temp", "data"] },
  { name: "etc temp data", stacks: ["etc", "temp", "data"] },
  { name: "etc temp data", stacks: ["etc", "temp", "data"] },
];

function Home() {
  const [isLoading, setIsLoading] = useState<boolean | "loading">(false);
  const onClick = () => {
    setIsLoading("loading");
    setTimeout(() => {
      setIsLoading(true);
    }, 3000);
  };

  return (
    <Background>
      <LoadBtn onClick={onClick}>
        {isLoading === true
          ? "true"
          : isLoading === "loading"
          ? isLoading
          : "false"}
      </LoadBtn>
      <InfoWrap
        className={
          isLoading === true
            ? null
            : isLoading === "loading"
            ? styles.infoWrap_loading
            : styles.invisible
        }
        isLoading={isLoading}
      >
        <img src={iconImage} />
        <span>Accessing...</span>
        <div>
          <h1>Projects</h1>
          <h1> Archive</h1>
        </div>
        <span>Dev.</span>
        <h2>Woong</h2>
        <span>_</span>
      </InfoWrap>
      <ListWrap>
        <BtnList>
          {isLoading === false
            ? null
            : projectList.map((item, index) => (
                <MainListBtn
                  key={index}
                  index={index}
                  proj={item}
                  isLoading={isLoading}
                />
              ))}
        </BtnList>
      </ListWrap>
      <FrontGradBG
        className={
          isLoading === true
            ? null
            : isLoading === "loading"
            ? styles.frontGradBG_loading
            : styles.invisible
        }
      >
        <div>
          <span>ACCESSING...</span>
          <span>PROJECTS ARCHIVE</span>
        </div>
      </FrontGradBG>
    </Background>
  );
}

export default Home;
