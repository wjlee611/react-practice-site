import { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isLoadingAtom } from "../atoms";

const to_visible_blink = keyframes`
  0% {
    opacity: 0;
  }
  19%{
    opacity: 0;
  }
  20%{
    opacity: 1;
  }
  39%{
    opacity: 1;
  }
  40% {
    opacity: 0;
  }
  59%{
    opacity: 0;
  }
   60% {
    opacity: 1;
  } 
  79%{
    opacity: 1;
  }
  80% {
    opacity: 0;
  } 
  99%{
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
const to_visible = keyframes`
  from {
    opacity: 0;
  } to {
    opacity: 1;
  }
`;
const titleWrap_border = keyframes`
  from {
    width: 0%;
  } to {
    width: 80%;
  }
`;
const titleNo = keyframes`
  from {
    left: -5%;
  } to {
    left: 0;
  }
`;
const titleName = keyframes`
  from {
    right: 40%;
  } to {
    right: 0;
  }
`;
const titleIcon = keyframes`
  from {
    right: 30%;
  } to {
    right: 0;
  }
`;

const ButtomWrap = styled.button<{
  isSelected: boolean;
  index: number;
  isLoading: boolean | "loading";
}>`
  width: 100%;
  max-width: 800px;
  height: ${(props) => (props.isSelected ? "500px" : "40px")};
  background-color: rgba(0, 0, 0, 0);
  border: none;
  margin: 10px 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  z-index: 2;
  &:hover > div:first-child {
    opacity: 1;
  }
  transition: height 0.3s cubic-bezier(0.7, 0, 0.2, 1);
  opacity: ${(props) => (props.isLoading === true ? 1 : 0)};
  animation: ${(props) => (props.isLoading === true ? null : to_visible_blink)}
    0.2s ease-in-out forwards;
  animation-delay: ${(props) => props.index / 8 + "s"};
`;
const TitleGradBG = styled.div<{
  isSelected: boolean;
  index: number;
  isLoading: boolean | "loading";
}>`
  width: ${(props) => (props.isLoading === true ? "80%" : "0%")};
  height: 40px;
  margin-left: 100px;
  position: absolute;
  background: ${"linear-gradient(175deg, #00000000 20%, #00000099)"};
  opacity: ${(props) => (props.isSelected ? 1 : 0)};
  transition: opacity 0.2s ease-out;
  animation: ${(props) => (props.isLoading === true ? null : titleWrap_border)}
    1s cubic-bezier(0, 0.4, 0, 1) forwards;
  animation-delay: ${(props) => props.index / 8 + "s"};
  will-change: width;
`;
const TitleWrap = styled.div<{ index: number; isLoading: boolean | "loading" }>`
  width: ${(props) => (props.isLoading === true ? "80%" : "0%")};
  height: 40px;
  margin-left: 100px;
  border-bottom: 3px solid white;
  display: flex;
  z-index: 2;
  position: absolute;
  animation: ${(props) => (props.isLoading === true ? null : titleWrap_border)}
    1s cubic-bezier(0, 0.4, 0, 1) forwards;
  animation-delay: ${(props) => props.index / 8 + "s"};
  will-change: width;
`;
const TitleNo = styled.div<{ index: number; isLoading: boolean | "loading" }>`
  width: 100px;
  height: 40px;
  padding-bottom: 2px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  color: white;
  position: absolute;
  left: 0;
  top: 0px;
  font-size: 15px;
  font-weight: 700;
  & > span:first-child {
    position: absolute;
    top: 3px;
    left: -5px;
    font-weight: 400;
  }
  opacity: ${(props) => (props.isLoading === true ? 1 : 0)};
  animation: ${(props) => (props.isLoading === true ? null : titleNo)} 0.5s
      cubic-bezier(0, 0.4, 0, 1) forwards,
    ${(props) => (props.isLoading === true ? null : to_visible)} 0.2s
      ease-in-out forwards;
  animation-delay: ${(props) => props.index / 8 + 0.5 + "s"};
  will-change: left;
`;
const TitleName = styled.div<{ index: number; isLoading: boolean | "loading" }>`
  height: 40px;
  padding-bottom: 5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: white;
  width: 200px;
  align-items: center;
  position: absolute;
  right: 0;
  font-weight: 400;
  & > div:first-child {
    font-weight: 700;
    & > span:first-child,
    & > span:last-child {
      color: ${"#00FFAB"};
    }
  }
  opacity: ${(props) => (props.isLoading === true ? 1 : 0)};
  animation: ${(props) => (props.isLoading === true ? null : titleName)} 0.7s
      cubic-bezier(1, 0, 0.3, 1) forwards,
    ${(props) => (props.isLoading === true ? null : to_visible)} 0.2s
      ease-in-out forwards;
  animation-delay: ${(props) => props.index / 8 + 0.7 + "s"};
  will-change: right;
`;
const TitleIcon = styled.div<{ index: number; isLoading: boolean | "loading" }>`
  width: 30px;
  height: 30px;
  position: absolute;
  display: flex;
  align-items: flex-start;
  top: 5px;
  right: 0;
  & > img {
    filter: invert(91%) sepia(99%) saturate(35%) hue-rotate(254deg)
      brightness(108%) contrast(100%);
  }
  opacity: ${(props) => (props.isLoading === true ? 1 : 0)};
  animation: ${(props) => (props.isLoading === true ? null : titleIcon)} 1s
      cubic-bezier(0, 0.4, 0, 1) forwards,
    ${(props) => (props.isLoading === true ? null : to_visible)} 0.5s
      ease-in-out forwards;
  animation-delay: ${(props) => props.index / 8 + 1 + "s"};
  will-change: right;
`;
const ContentWrap = styled.div<{ isSelected: boolean }>`
  width: 100%;
  height: ${(props) => (props.isSelected ? "463px" : "3px")};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-left: 10px solid white;
  margin-left: 30px;
  transition: height 0.3s cubic-bezier(0.7, 0, 0.2, 1), top 0.3s ease-in-out;
  position: absolute;
  top: 37px;
  box-sizing: content-box;
  z-index: 1;
`;
const Content = styled.div`
  width: 80%;
  height: 463px;
  margin-left: 60px;
  border-bottom: 3px solid white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${"#00000055"};
  color: white;
`;

interface IMainListBtn {
  index: number;
  proj: { name: string; stacks: string[]; pos: string };
}
function MainListBtn({ index, proj }: IMainListBtn) {
  const isLoading = useRecoilValue(isLoadingAtom);
  const setIsLoading = useSetRecoilState(isLoadingAtom);

  const [isSelected, setIsSelected] = useState(false);
  const onClick = () => {
    setIsSelected((prev) => !prev);
  };
  const onContentClick = () => {
    setIsLoading(true);
  };
  return (
    <ButtomWrap
      isSelected={isSelected}
      index={index}
      isLoading={isLoading}
      onClick={onClick}
    >
      <TitleGradBG
        isSelected={isSelected}
        index={index}
        isLoading={isLoading}
      />
      <TitleWrap index={index} isLoading={isLoading}>
        <TitleNo index={index} isLoading={isLoading}>
          <span>Archive No.</span>
          <span>{(index + 1).toString().padStart(3, "0")}</span>
        </TitleNo>
        <TitleName index={index} isLoading={isLoading}>
          <div>
            <span>/ </span>
            <span>{proj.name}</span>
            <span> /</span>
          </div>
          <span>{proj.stacks.map((stack) => stack + " ")}</span>
        </TitleName>
      </TitleWrap>
      <TitleIcon index={index} isLoading={isLoading}>
        <img src={proj.pos} alt="f/b/fIcon" />
      </TitleIcon>
      <ContentWrap isSelected={isSelected}>
        <Content>
          <span>contents</span>
          <Link
            onClick={onContentClick}
            to={{ pathname: `/portfolio-site/${(index + 1).toString()}` }}
          >
            click
          </Link>
        </Content>
      </ContentWrap>
    </ButtomWrap>
  );
}

export default MainListBtn;
