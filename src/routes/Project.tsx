import { useParams } from "react-router-dom";

interface RouteParams {
  project: string;
}
function Project() {
  const { project } = useParams<RouteParams>();
  return <h1>Project: {project}</h1>;
}

export default Project;
