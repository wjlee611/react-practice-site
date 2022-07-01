import styled from "styled-components";
import styles from "../css/Home.module.css";

const ContentWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  font-size: 20px;
  margin-bottom: 200px;
  & > img {
    width: 300px;
    height: 300px;
    border-radius: 150px;
    border: 2px solid white;
  }
`;
const Introduce = styled.div`
  width: 70%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  & * {
    margin-top: 5px;
  }
`;
const Title = styled.div`
  width: 90%;
  border-bottom: 2px solid white;
  margin-top: 30px;
`;
const Sites = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  & > a {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    transition: filter 0.5s ease-out;
    filter: invert(91%) sepia(99%) saturate(35%) hue-rotate(254deg)
      brightness(108%) contrast(100%);
    & > span {
      color: black;
      margin-left: 5px;
    }
    & > img {
      width: 70px;
      height: 70px;
    }
    &:hover {
      filter: invert(77%) sepia(57%) saturate(1570%) hue-rotate(99deg)
        brightness(101%) contrast(101%);
    }
  }
`;
const SpecialThx = styled.div`
  margin-top: 20px;
`;

interface IMainInfo {
  assets: string[];
}
function MainInfo({ assets }: IMainInfo) {
  return (
    <ContentWrap className={styles.tab_open}>
      <img src={assets[0]} alt="profileImage" />
      <Introduce>
        <span>안녕하세요,</span>
        <span>풀스택 개발자를 목표로 열심히 달리고 있는 웅이라고 합니다.</span>
        <br />
        <span>
          취미로 영상편집, 간단한 개인 프로젝트 만들기, 게임을 하고 있으며,
        </span>
        <span>놀랍게도 닭다리보다 닭가슴살을 더 좋아합니다.</span>
      </Introduce>
      <Title>Sites</Title>
      <Sites>
        <a href="https://github.com/wjlee611" target="_blank" rel="noreferrer">
          <img src={assets[1]} alt="github" />
        </a>
        <a href="https://with611.tistory.com/" target="_blank" rel="noreferrer">
          <img src={assets[2]} alt="blog" />
        </a>
        <a
          href="https://www.youtube.com/c/WITH611"
          target="_blank"
          rel="noreferrer"
        >
          <img src={assets[3]} alt="youtube" />
        </a>
      </Sites>
      <Title>Source Code</Title>
      <Sites>
        <a
          href="https://github.com/wjlee611/portfolio-site"
          target="_blank"
          rel="noreferrer"
        >
          <img src={assets[1]} alt="github" />
          <span>@wjlee611/portfolio-site</span>
        </a>
      </Sites>
      <Title>Special Thanks</Title>
      <SpecialThx>지민이형 로고 제작해줘서 고마워~^^7</SpecialThx>
    </ContentWrap>
  );
}

export default MainInfo;
