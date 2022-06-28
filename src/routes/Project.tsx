import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${"#333"};
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
`;

interface RouteParams {
  project: string;
}
function Project() {
  const { project } = useParams<RouteParams>();
  return (
    <Background>
      <Link
        to={{ pathname: `/portfolio-site` }}
        style={{ color: "white", fontSize: "20px" }}
      >
        Back to Main
      </Link>
      <h1 style={{ color: "white", fontSize: "40px", marginLeft: "20px" }}>
        Project: {project}
      </h1>
    </Background>
  );
}

export default Project;
