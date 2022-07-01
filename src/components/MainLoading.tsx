import styled from "styled-components";

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
const OtherLoadAssets = styled.div`
  width: 10px;
  height: 10px;
  position: absolute;
  opacity: 0;
`;

interface IMainLoading {
  isLoading: boolean | "loading";
  assets: string[];
}
function MainLoading({ isLoading, assets }: IMainLoading) {
  return (
    <LoadWrap isLoading={isLoading}>
      <OtherLoadAssets>
        <img src={assets[0]} alt="asset" />
        <img src={assets[1]} alt="asset" />
        <img src={assets[5]} alt="asset" />
        <img src={assets[6]} alt="asset" />
        <img src={assets[7]} alt="asset" />
        <img src={assets[8]} alt="asset" />
      </OtherLoadAssets>
      <IconGroup>
        <img src={assets[2]} alt="icon" />
        <img src={assets[3]} alt="icon" />
        <img src={assets[4]} alt="icon" />
      </IconGroup>
      Loading...
    </LoadWrap>
  );
}

export default MainLoading;
