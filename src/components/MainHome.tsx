import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { mainTabSelected } from "../atoms";
import styles from "../css/Home.module.css";

const InfoWrap = styled.div<{
  className: any;
  isLoading: boolean | "loading";
  isSelected: boolean;
}>`
  width: 500px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  z-index: 3;
  position: absolute;
  left: 0;
  pointer-events: none;
  will-change: ${(props) => (props.isLoading === true ? null : "transform")};
  //logo
  & > img:first-child {
    position: absolute;
    width: 150px;
    height: 150px;
    margin-bottom: 20px;
  }
`;
const Logo = styled.img<{ isSelected: boolean }>`
  top: ${(props) => (props.isSelected ? "calc(250px - 50vh)" : 0)};
  left: ${(props) => (props.isSelected ? "300px" : "100px")};
  transform: scale(${(props) => (props.isSelected ? "50%" : "100%")});
  transition: top 0.5s cubic-bezier(0.3, 0, 0.2, 1),
    left 0.5s cubic-bezier(0.7, 0, 0.8, 1), transform 0.5s ease-in-out;
  will-change: top, left, transfrom;
`;
const Etc = styled.div<{ isSelected: boolean }>`
  opacity: ${(props) => (props.isSelected ? 0 : 1)};
  transition: opacity 0.5s ease-out;
  & > * {
    position: absolute;
    left: 100px;
  }
  //Accessing...
  & > span:nth-child(1) {
    font-size: 20px;
    font-weight: 400;
    margin-left: 30px;
    top: 160px;
  }
  //Projects Archive
  & > div:nth-child(2),
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
  & > div:nth-child(3) {
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

interface IHomeInfo {
  isLoading: boolean | "loading";
  assets: string[];
}
function MainHome({ isLoading, assets }: IHomeInfo) {
  const mainTabIdx = useRecoilValue(mainTabSelected);
  return (
    <InfoWrap
      className={
        isLoading === true
          ? null
          : isLoading === "loading"
          ? styles.infoWrap_loading
          : styles.invisible
      }
      isLoading={isLoading}
      isSelected={mainTabIdx !== 0}
    >
      <Logo src={assets[0]} alt="iconImage" isSelected={mainTabIdx !== 0} />
      <Etc isSelected={mainTabIdx !== 0}>
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
      </Etc>
    </InfoWrap>
  );
}

export default MainHome;
