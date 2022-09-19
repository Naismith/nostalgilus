import { Link } from "react-router-dom";
import { PATHS } from "src/constants";
import styled from "styled-components";

type Props = {
  thread: any;
};

const Container = styled.article`
  border: 1px solid black;
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

export const Thread = ({ thread }: Props) => {
  return (
    <Container>
      <div>
        <Link to={PATHS.THREAD(thread.id)}>{thread.name}</Link>
      </div>
      <div>{thread.totalResponses}</div>
      <div>Third</div>
      <div>Last Response by {thread.lastResponse.name}</div>
    </Container>
  );
};
