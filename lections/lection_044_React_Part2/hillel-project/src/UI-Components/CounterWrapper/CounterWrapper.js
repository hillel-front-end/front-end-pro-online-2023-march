import styled from "styled-components";

const CounterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & button {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-family: ‘Open Sans’;
    font-weight: 900;
    color: #202020;
    cursor: pointer;
  }

  & .count {
    font-size: 20px;
    font-family: ‘Open Sans’;
    font-weight: 900;
    color: #202020;
    padding: 0px 5px;
  }
`;

export default CounterWrapper;
