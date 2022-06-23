import { useState } from "react";
import styled from "styled-components";

const ButtomWrap = styled.div<{ isSelected: boolean }>`
  width: 90%;
  height: ${(props) => (props.isSelected ? "500px" : "40px")};
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: relative;
  z-index: 2;
  &:hover > div:first-child {
    opacity: 1;
  }
  transition: height 0.3s ease-in-out;
  will-change: contents;
`;
const TitleGradBG = styled.div<{ isSelected: boolean }>`
  width: 80%;
  height: 40px;
  margin-right: 70px;
  position: absolute;
  background: ${"linear-gradient(175deg, #00000000 20%, #00000055)"};
  opacity: ${(props) => (props.isSelected ? 1 : 0)};
  transition: opacity 0.2s ease-out;
`;
const TitleWrap = styled.div`
  width: 80%;
  height: 40px;
  margin-right: 70px;
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
  width: 300px;
  align-items: center;
  position: absolute;
  right: 0;
`;
const ContentWrap = styled.div<{ isSelected: boolean }>`
  width: 100%;
  height: ${(props) => (props.isSelected ? "460px" : "3px")};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  border-left: 10px solid white;
  transition: height 0.3s cubic-bezier(0.6, 0, 0.4, 1);
  position: absolute;
  top: 37px;
  box-sizing: content-box;
  z-index: 1;
`;
const Content = styled.div<{ isSelected: boolean }>`
  width: 80%;
  height: 460px;
  margin-right: 70px;
  padding: 0 10px;
  overflow: hidden;
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
}
function MainListBtn({ index, proj }: IMainListBtn) {
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
