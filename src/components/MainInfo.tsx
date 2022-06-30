import styled from "styled-components";
import styles from "../css/Home.module.css";

const InfoWrap = styled.div<{ className: any; isLoading: boolean | "loading" }>`
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

interface IMainInfo {
  isLoading: boolean | "loading";
  assets: string[];
}
function MainInfo({ isLoading, assets }: IMainInfo) {
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
    >
      <img src={assets[0]} alt="iconImage" />
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
  );
}

export default MainInfo;
