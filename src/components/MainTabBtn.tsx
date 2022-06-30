import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { mainTabSelected } from "../atoms";

const BtnWrap = styled.button<{ isSelected: boolean }>`
  width: 100px;
  height: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0, 0, 0, 0);
  border: none;
  & > h1 {
    color: white;
    font-size: 20px;
    font-weight: ${(props) => (props.isSelected ? 700 : 400)};
  }
  &:hover > div > div:first-child {
    width: 100px;
  }
`;
const BtnUnderBarCover = styled.div`
  width: 100px;
  height: 3px;
  position: relative;
  display: flex;
`;
const BtnUnderBar = styled.div<{ isSelected: boolean }>`
  width: ${(props) => (props.isSelected ? "100px" : "0px")};
  height: 3px;
  background-color: #00ffab;
  position: absolute;
  z-index: 1;
  transition: width 0.3s cubic-bezier(0, 0.5, 0.5, 1);
`;
const BtnUnderBarBack = styled.div`
  width: 100px;
  height: 3px;
  background-color: #00000055;
  position: absolute;
  z-index: 0;
`;

interface IMainTabBtn {
  title: string;
  index: number;
}
function MainTabBtn({ title, index }: IMainTabBtn) {
  const mainTabIdx = useRecoilValue(mainTabSelected);
  const setMainTabIdx = useSetRecoilState(mainTabSelected);

  return (
    <BtnWrap
      onClick={() => setMainTabIdx(index)}
      isSelected={index === mainTabIdx}
    >
      <h1>{title}</h1>
      <BtnUnderBarCover>
        <BtnUnderBar isSelected={index === mainTabIdx} />
        <BtnUnderBarBack />
      </BtnUnderBarCover>
    </BtnWrap>
  );
}

export default MainTabBtn;
