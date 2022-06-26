import { useState } from "react";
import styled from "styled-components";
import MainListBtn from "../components/MainListBtn";
import styles from "../css/Home.module.css";
import { Helmet } from "react-helmet";
// Image assets
import bgImage from "../images/bg.png";
import iconImage from "../images/prts.png";

const Background = styled.div`
  background-image: linear-gradient(
      rgba(0, 0, 0, 0.6),
      rgba(200, 200, 200, 0.3)
    ),
    url(${bgImage});
  background-size: cover;
  background-position: center;
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
const InfoWrap = styled.div<{ className: any }>`
  width: 40%;
  height: 300px;
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
    font-weight: 400;
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
      font-weight: 400;
      margin-left: 10px;
    }
  }
  //Dev.
  & > span:nth-child(4) {
    font-size: 15px;
    font-weight: 400;
    margin-left: 30px;
    top: 220px;
  }
  //Woong
  & > h2:nth-child(5) {
    font-size: 25px;
    font-weight: 700;
    margin-left: 30px;
    top: 235px;
  }
`;
const ListWrap = styled.div`
  width: 60%;
  height: 100vh;
  margin-right: 100px;
  overflow: hidden;
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
  align-items: flex-end;
  padding-top: 100px;
  padding-bottom: 200px;
  will-change: height;
`;

//For testing loading animation
const LoadBtn = styled.button`
  position: absolute;
  top: 100px;
  left: 50px;
  z-index: 3;
`;

const projectList = [
  { name: "프로젝트1", stacks: ["HTML", "CSS"], position: "front" },
  { name: "콩콩", stacks: ["Python"], position: "back" },
  { name: "no.3", stacks: ["HTML", "CSS", "Javascript"], position: "front" },
  { name: "project 4", stacks: ["React"], position: "front" },
  { name: "5오", stacks: ["node.js"], position: "back" },
  { name: "666666", stacks: ["Python"], position: "back" },
  { name: "777ucky", stacks: ["React", "node.js"], position: "all" },
  { name: "etc temp data", stacks: ["etc", "temp", "data"], position: "front" },
  { name: "etc temp data", stacks: ["etc", "temp", "data"], position: "back" },
  { name: "etc temp data", stacks: ["etc", "temp", "data"], position: "front" },
  { name: "etc temp data", stacks: ["etc", "temp", "data"], position: "all" },
  { name: "etc temp data", stacks: ["etc", "temp", "data"], position: "back" },
  { name: "etc temp data", stacks: ["etc", "temp", "data"], position: "front" },
  { name: "etc temp data", stacks: ["etc", "temp", "data"], position: "back" },
  { name: "etc temp data", stacks: ["etc", "temp", "data"], position: "all" },
];

function Home() {
  const [isLoading, setIsLoading] = useState<boolean | "loading">(false);
  const onClick = () => {
    setIsLoading("loading");
    setTimeout(() => {
      setIsLoading(true);
    }, 2000 + 125 * projectList.length); // ani play time(ms)
  };

  return (
    <Background>
      <Helmet>
        <title>dev.Woong</title>
      </Helmet>
      <LoadBtn
        onClick={onClick}
        disabled={isLoading === "loading" ? true : false}
      >
        {isLoading === true
          ? "status: loaded"
          : isLoading === "loading"
          ? "status: load, play ani"
          : "status: loading"}
      </LoadBtn>
      <InfoWrap
        className={
          isLoading === true
            ? null
            : isLoading === "loading"
            ? styles.infoWrap_loading
            : styles.invisible
        }
      >
        <img src={iconImage} />
        <span>Accessing...</span>
        <div>
          <h1>Projects</h1>
          <h1> Archive</h1>
        </div>
        <span>Dev.</span>
        <h2>Woong</h2>
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
