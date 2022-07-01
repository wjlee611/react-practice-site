import styled from "styled-components";
import MainListBtn from "../components/MainListBtn";
import styles from "../css/Home.module.css";
import { Helmet } from "react-helmet";
import { useRecoilValue } from "recoil";
import { isLoadingAtom, mainTabSelected } from "../atoms";
// Image assets
import bgImage from "../images/bg.png";
import iconImage from "../images/prts.png";
import frontIcon from "../images/front.svg";
import backIcon from "../images/back.svg";
import fullIcon from "../images/full.svg";
import profileImage from "../images/icon.jpg";
import githubIcon from "../images/github.svg";
import blogIcon from "../images/blog.svg";
import youtubeIcon from "../images/youtube.svg";
import { useEffect, useState } from "react";
import MainLoading from "../components/MainLoading";
import MainTabBtn from "../components/MainTabBtn";
import MainHome from "../components/MainHome";
import MainInfo from "../components/MainInfo";
import MainContect from "../components/MainContect";

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
  justify-content: flex-end;
  position: relative;
  top: 0;
  left: 0;
`;
const FrontGradBG = styled.div<{ className: any }>`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: absolute;
  background: linear-gradient(
    0deg,
    #000000ff 0%,
    #00000000 200px calc(100% - 100px),
    #000000ff 100%
  );
  z-index: 4;
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
const ListWrap = styled.div`
  width: 100vw;
  max-width: 900px;
  height: 100vh;
  overflow: hidden;
  overflow-y: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
  z-index: 1;
  will-change: scroll-position;
  position: absolute;
  right: 0;
`;
const BtnList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  padding-bottom: 200px;
  will-change: scroll-position, height;
  padding-right: 50px; //0px @mobile screen
`;
const ContentWrap = styled.div<{ isSelected: boolean }>`
  width: 480px;
  height: calc(100vh - 80px);
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 20px;
  display: flex;
  align-items: flex-end;
  position: absolute;
  left: 10px;
  bottom: -20px;
  z-index: 2;
  transform: translateY(${(props) => (props.isSelected ? "0" : "100vh")});
  transition: transform 0.5s cubic-bezier(0.4, 0, 0, 1);
  & > div {
    width: 100%;
    height: calc(100% - 150px);
    position: relative;
    overflow: hidden;
    overflow-y: scroll;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera*/
    }
  }
`;
const TabWrap = styled.ul`
  width: 500px;
  height: 100px;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: rgba(0, 0, 0, 0);
  z-index: 5;
  pointer-events: none;
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
  const [isLoading, setIsLoading] = useState<boolean | "loading">(false);
  const isRecoilLoading = useRecoilValue(isLoadingAtom);
  const mainTabIdx = useRecoilValue(mainTabSelected);
  useEffect(() => {
    if (isRecoilLoading === true) {
      setIsLoading(true);
    } else {
      setIsLoading("loading");
    }
  }, [isRecoilLoading]);
  console.log(isLoading);
  return (
    <Background>
      <Helmet>
        <title>dev.Woong</title>
      </Helmet>
      {isLoading === true ? null : (
        <MainLoading
          isLoading={isLoading}
          assets={[
            iconImage,
            bgImage,
            frontIcon,
            backIcon,
            fullIcon,
            profileImage,
            githubIcon,
            blogIcon,
            youtubeIcon,
          ]}
        />
      )}
      <MainHome isLoading={isLoading} assets={[iconImage]} />
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
      <ContentWrap isSelected={mainTabIdx !== 0}>
        <div>
          {mainTabIdx === 1 ? (
            <MainInfo
              assets={[profileImage, githubIcon, blogIcon, youtubeIcon]}
            />
          ) : mainTabIdx === 2 ? (
            <MainContect />
          ) : null}
        </div>
      </ContentWrap>
      <TabWrap>
        <li>
          <MainTabBtn title={"Home"} index={0} />
        </li>
        <li>
          <MainTabBtn title={"Info"} index={1} />
        </li>
        <li>
          <MainTabBtn title={"Contect"} index={2} />
        </li>
      </TabWrap>
    </Background>
  );
}

export default Home;
