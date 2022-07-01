import styled from "styled-components";
import styles from "../css/Home.module.css";

const ContentWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 20px;
  color: white;
  font-size: 20px;
  margin-bottom: 200px;
  & > * {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text;
    margin-bottom: 10px;
  }
`;

function MainContact() {
  return (
    <ContentWrap className={styles.tab_open}>
      <span>E-mail: wjlee611@gmail.com</span>
      <span>Mobile: +82 10-2124-7513</span>
    </ContentWrap>
  );
}

export default MainContact;
