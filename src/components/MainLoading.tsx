import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { isLoadingAtom } from "../atoms";

const LoadWrap = styled.div<{ isLoading: boolean | "loading" }>`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: #333;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  font-size: 40px;
  opacity: ${(props) => (props.isLoading === false ? 1 : 0)};
  transition: opacity 0.5s linear;
  pointer-events: none;
  z-index: 10;
`;
const IconGroup = styled.div`
  & > img {
    width: 30px;
    height: 30px;
    filter: invert(91%) sepia(99%) saturate(35%) hue-rotate(254deg)
      brightness(108%) contrast(100%);
  }
  width: 150px;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

interface IMainLoading {
  icons: string[];
}
function MainLoading({ icons }: IMainLoading) {
  const isLoading = useRecoilValue(isLoadingAtom);
  return (
    <LoadWrap isLoading={isLoading}>
      <IconGroup>
        <img src={icons[0]} alt="icon" />
        <img src={icons[1]} alt="icon" />
        <img src={icons[2]} alt="icon" />
      </IconGroup>
      Loading...
    </LoadWrap>
  );
}

export default MainLoading;
