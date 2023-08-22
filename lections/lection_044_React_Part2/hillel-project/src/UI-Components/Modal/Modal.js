import styled from "styled-components";
import { Button } from "../Buttom/Button";

const ModalContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  z-index: 30;

  text-align: center;
  padding: 30px;
  border-radius: 3px;
  //transition: 0.3s all;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  //background-color: white;
`;

const ModalOverlay = styled.div`
  position: fixed;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
  background-color: rgb(232 232 232 / 97%);
  z-index: 20;

  visibility: ${(props) => props.visibility};

  & button.closeModal {
    position: absolute;
    right: 15px;
    top: 40px;
    color: red;
  }
`;

const Modal = (props) => {
  const CloseButton = (
    <Button className="closeModal" onClick={props.onClose}>
      X
    </Button>
  );

  return (
    <ModalOverlay visibility={props.visibility}>
      {CloseButton}
      <ModalContent>{props.children}</ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
