import styled from 'styled-components';

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.19);
`;

export const ModalContent = styled.div`
  position: relative;
  background-color: #fff;
  width: 60vh;
  padding: 20px;
  border-radius: 5px;
`;

export const ModalBody = styled.div`
  margin-bottom: 30%;
`;

export const ModalContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  h2 {
    font-weight: bold;
    margin-top: 4rem;
  }
  h3 {
    font-weight: bold;
  }
  h4 {
    text-align: center;
    margin-left: 2rem;
    margin-right: 2rem;
    margin-bottom: 1rem;
    width: 50vh;
  }
`;

export const ModalFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CloseButton = styled.button`
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  font-size: 40px;
  padding: 0px 10px;
  border-radius: 3px;
  background-color: rgba(221, 221, 221, 0);
  border: none;

  &:hover {
    background-color: #ccc;
  }
`;

export const SuccessButton = styled.button`
  padding: 15px 100px;
  border-radius: 30px;
  background-color: #f79fcc;
  color: #ffffff;
  font-weight: bold;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #ec0f0f;
  }
`;

export default ModalContainer;
