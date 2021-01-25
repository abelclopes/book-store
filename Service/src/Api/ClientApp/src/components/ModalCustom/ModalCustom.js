import React from 'react';
import { ModalProvider } from 'styled-react-modal'

export const StyledModal = Modal.styled`
  width: 20rem;
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  opacity: ${props => props.opacity};
  transition: opacity ease 500ms;
`;

const ModalCustom = ({}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [opacity, setOpacity] = useState(0);

    function toggleModal(e) {
      setIsOpen(!isOpen);
    }

    function afterOpen() {
      setTimeout(() => {
        setOpacity(1);
      }, 10);
    }

    function beforeClose() {
      return new Promise(resolve => {
        setOpacity(0);
        setTimeout(resolve, 200);
      });
    }

  return (
    <>
      <StyledModal
        isOpen={isOpen}
        afterOpen={afterOpen}
        beforeClose={beforeClose}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
        opacity={opacity}
        backgroundProps={{ opacity }}
      />
    </> 
  );
}

export default ModalCustom;