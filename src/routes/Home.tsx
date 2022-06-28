import { useEffect } from "react";
import styled from "styled-components";
import MainListBtn from "../components/MainListBtn";
import styles from "../css/Home.module.css";
import { Helmet } from "react-helmet";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isLoadingAtom } from "../atoms";
// Image assets
import bgImage from "../images/bg.png";
import iconImage from "../images/prts.png";
import frontIcon from "../images/front.svg";
import backIcon from "../images/back.svg";
import fullIcon from "../images/full.svg";

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
  position: absolute;
  top: 0;
  left: 0;
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
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 100px;
  color: white;
  z-index: 1;
  position: relative;
  will-change: ${(props) => (props.isLoading === true ? null : "transform")};
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
  & > div:nth-child(3),
  & > div:nth-child(4) {
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
  & > div:nth-child(4) {
    top: 173px;
    margin-left: 30px;
    & > h1:not(:last-child) {
      opacity: 0;
    }
    & > h1:last-child {
      font-weight: 400;
    }
  }
  //Dev.
  & > span:nth-child(5) {
    font-size: 15px;
    font-weight: 400;
    margin-left: 30px;
    top: 220px;
  }
  //Woong
  & > h2:nth-child(6) {
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
  will-change: scroll-position;
`;
const BtnList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-top: 100px;
  padding-bottom: 200px;
  will-change: scroll-position, height;
`;

const projectList = [
  { name: "프로젝트1", stacks: ["HTML", "CSS"], pos: frontIcon },
  { name: "콩콩", stacks: ["Python"], pos: backIcon },
  { name: "no.3", stacks: ["HTML", "CSS", "Javascript"], pos: frontIcon },
  { name: "project 4", stacks: ["React"], pos: frontIcon },
  { name: "5오", stacks: ["node.js"], pos: backIcon },
  { name: "666666", stacks: ["Python"], pos: backIcon },
  { name: "777ucky", stacks: ["React", "node.js"], pos: fullIcon },
  { name: "etc temp data", stacks: ["etc", "temp", "data"], pos: frontIcon },
  { name: "etc temp data", stacks: ["etc", "temp", "data"], pos: backIcon },
  { name: "etc temp data", stacks: ["etc", "temp", "data"], pos: fullIcon },
  { name: "etc temp data", stacks: ["etc", "temp", "data"], pos: frontIcon },
  { name: "etc temp data", stacks: ["etc", "temp", "data"], pos: backIcon },
  { name: "etc temp data", stacks: ["etc", "temp", "data"], pos: fullIcon },
  { name: "etc temp data", stacks: ["etc", "temp", "data"], pos: frontIcon },
  { name: "etc temp data", stacks: ["etc", "temp", "data"], pos: backIcon },
];
function Home() {
  const isLoading = useRecoilValue(isLoadingAtom);
  const setIsLoading = useSetRecoilState(isLoadingAtom);
  useEffect(() => {
    window.onload = () => {
      setIsLoading("loading");
      // setTimeout(() => {
      //   setIsLoading(true);
      // }, 2000 + 125 * projectList.length); // ani play time(ms))
    };
  }, []);

  return (
    <Background>
      <Helmet>
        <title>dev.Woong</title>
      </Helmet>
      {isLoading === false ? (
        <div
          style={{
            width: "100vw",
            height: "100vh",
            overflow: "hidden",
            backgroundColor: "#333",
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            fontSize: "40px",
          }}
        >
          <img src={frontIcon} alt="icon" style={{ opacity: "0" }} />
          <img src={backIcon} alt="icon" style={{ opacity: "0" }} />
          <img src={fullIcon} alt="icon" style={{ opacity: "0" }} />
          Loading...
        </div>
      ) : null}
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
        <img src={iconImage} alt="iconImage" />
        <span>Accessing...</span>
        <div>
          <h1>Projects</h1>
          <h1> Archive</h1>
        </div>
        <div>
          <h1>Projects</h1>
          <h1> Archive</h1>
          <h1>_</h1>
        </div>
        <span>Dev.</span>
        <h2>Woong</h2>
      </InfoWrap>
      <ListWrap>
        <BtnList>
          {isLoading === false
            ? null
            : projectList.map((item, index) => (
                <MainListBtn key={index} index={index} proj={item} />
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
