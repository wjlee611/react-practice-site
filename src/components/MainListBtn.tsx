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
  &:hover > div:first-child,
  &:hover > div:last-child > div:first-child {
    background-color: ${"#00000055"};
  }
  transition: height 0.3s ease-in-out, background-color 0.3s ease-out;
`;
const TitleWrap = styled.div<{ isSelected: boolean }>`
  width: 80%;
  height: 40px;
  margin-right: 70px;
  border-bottom: 3px solid white;
  display: flex;
  z-index: 2;
  background-color: ${(props) =>
    props.isSelected ? "#00000055" : "#00000000"};
  transition: background-color 0.3s ease-out;
  position: relative;
`;
const TitleNo = styled.div`
  height: 40px;
  padding-bottom: 5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: white;
  position: absolute;
`;
const TitleName = styled(TitleNo)`
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
  transition: height 0.3s ease-in-out;
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
  transition: background-color 0.3s ease-out;
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
      <TitleWrap isSelected={isFocused}>
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
