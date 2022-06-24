import { useState } from "react";
import styled, { keyframes } from "styled-components";

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

const ButtomWrap = styled.div<{
  isSelected: boolean;
  index: number;
  isLoading: boolean | "loading";
}>`
  width: 90%;
  max-width: 800px;
  height: ${(props) => (props.isSelected ? "500px" : "40px")};
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  z-index: 2;
  &:hover > div:first-child {
    opacity: 1;
  }
  transition: height 0.3s ease-in-out;
  will-change: contents;
  opacity: ${(props) => (props.isLoading === true ? 1 : 0)};
  animation: ${(props) => (props.isLoading === true ? null : to_visible_blink)}
    0.2s ease-in-out forwards;
  animation-delay: ${(props) => props.index / 8 + "s"};
`;
const TitleGradBG = styled.div<{ isSelected: boolean }>`
  width: 85%;
  height: 40px;
  margin-left: 60px;
  position: absolute;
  background: ${"linear-gradient(175deg, #00000000 20%, #00000099)"};
  opacity: ${(props) => (props.isSelected ? 1 : 0)};
  transition: opacity 0.2s ease-out;
`;
const TitleWrap = styled.div`
  width: 85%;
  height: 40px;
  margin-left: 60px;
  border-bottom: 3px solid white;
  display: flex;
  z-index: 2;
  position: relative;
`;
const TitleNo = styled.div`
  height: 40px;
  padding-bottom: 2px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: white;
  position: absolute;
  left: 0;
  font-weight: 700;
  & > span:first-child {
    width: 100px;
    position: absolute;
    top: 5px;
    left: -5px;
  }
`;
const TitleName = styled.div`
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
`;
const ContentWrap = styled.div<{ isSelected: boolean }>`
  width: 100%;
  height: ${(props) => (props.isSelected ? "463px" : "3px")};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-left: 10px solid white;
  transition: height 0.3s ease-in-out, top 0.3s ease-in-out;
  position: absolute;
  top: ${(props) => (props.isSelected ? "37px" : "37px")};
  box-sizing: content-box;
  z-index: 1;
`;
const Content = styled.div<{ isSelected: boolean }>`
  width: 85%;
  height: 463px;
  margin-left: 50px;
  padding: 0 10px;
  border-bottom: 3px solid white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${(props) =>
    props.isSelected ? "#00000055" : "#00000000"};
  transition: background-color 0.3s cubic-bezier(0.6, 0, 0.4, 1);
  color: white;
`;

interface IMainListBtn {
  index: number;
  proj: { name: string; stacks: string[] };
  isLoading: boolean | "loading";
}
function MainListBtn({ index, proj, isLoading }: IMainListBtn) {
  const [isFocused, setIsFocused] = useState(false);
  const onFocus = () => {
    setIsFocused(true);
  };
  const onBlur = () => {
    setIsFocused(false);
  };
  return (
    <ButtomWrap
      tabIndex={index}
      onFocus={onFocus}
      onBlur={onBlur}
      isSelected={isFocused}
      index={index}
      isLoading={isLoading}
    >
      <TitleGradBG isSelected={isFocused} />
      <TitleWrap>
        <TitleNo>
          <span>Archive No.</span>
          <span>{(index + 1).toString().padStart(3, "0")}</span>
        </TitleNo>
        <TitleName>
          <span>[{proj.name}]</span>
          <span>{proj.stacks.map((stack) => stack + " ")}</span>
        </TitleName>
      </TitleWrap>
      <ContentWrap isSelected={isFocused}>
        <Content isSelected={isFocused}>Contents</Content>
      </ContentWrap>
    </ButtomWrap>
  );
}

export default MainListBtn;
