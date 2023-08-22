import styled from "styled-components";

export const ButtonsGroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5px;
  & button {
    flex: 1;
  }
`;

export const Button = styled.button`
  padding: 10px 15px;
  border: none;
  background: none;
  font-size: 0.8rem;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  transition: all 100ms linear;
  border: solid 2px #10222b;

  &.green-solid {
    border: solid 2px #95ab63;
    color: #fff;
    background: #95ab63;

    &:hover {
      background: #bdd684;
      border: solid 2px #bdd684;
    }
  }

  &.black-simple {
    border: solid 2px #10222b;
    &:hover {
      background: #10222b;
      color: #fff;
    }
  }
`;
