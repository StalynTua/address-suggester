import styled from "styled-components";

const Background = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgb(241, 242, 244);
  position: relative;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
`;

export const ContainerTitles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  h2 {
    text-align: center;
    font-weight: 900;
    margin-top: 4rem;
  }
  
  h3 {
    text-align: center;
  }

  h4 {
    margin-top: 0;
    text-align: center;
    overflow-wrap: break-word;
    color: rgb(182, 187, 195);
    width: 28vh;
  }
`;

export default Background;
