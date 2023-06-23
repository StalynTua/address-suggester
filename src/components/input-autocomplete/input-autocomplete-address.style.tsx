import styled from "styled-components";

const AddressInput = styled.div`
  position: relative;
  display: inline-block;
  width: 40%;
  max-width: 80%;
  height: 75px;

  input {
    box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.35);
    min-width: 100%;
    height: 100%;
    padding-left: 60px;
    font-size: 1.17em;
    font-weight: bold;
    box-sizing: border-box;
    border: 1px solid #f3f3f3;

    &:hover {
      outline: none;
    }
  }

  @media (max-width: 768px) {
    width: 60%
  }

  @media (max-width: 480px) {
    width: 80%
  }
`;

export const PredictorContainer = styled.div`
  border: 1px solid #f3f3f3;
  box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.50);
  border-top: none;
  position: absolute;
  background: #fff;
  z-index: 1;
  min-width: 100%;
  box-sizing: border-box;
`;

export const PredictorList = styled.div`
  max-height: 400px;
  overflow-y: auto;
`;

export const Prediction = styled.div`
  border: 1px solid #f3f3f3;

  &:hover {
    background-color: #e3e3e3;
    cursor: pointer;
    outline: none;
  }

  &:focus {
    background-color: #e3e3e3;
    cursor: pointer;
    outline: none;
  }
`;

export const PredictionText = styled.div`
  text-align: left;
  color: #000;

  h3 {
    margin-bottom: 0.5rem;
  }

  h4 {
    margin-top: 0;
    top: 0;
    color: rgb(182, 187, 195);
  }
`;

export const PredictionContainerText = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`;

export default AddressInput;
