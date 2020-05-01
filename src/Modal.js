import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
 
const customStyles = {
  content : {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  },
  image : {
      width: '10px',
      innerHeight:'10px',
  }
};
 
// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
//Modal.setAppElement('#yourAppElement')
 
export function Alert() {
  var subtitle;
  const [modalIsOpen,setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
 
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#A020F0';
  }
 
  function closeModal(){
    setIsOpen(false);
  }
 
    return (
      <div>
        <button onClick={openModal}>Deliver Pun</button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Alert Modal"
        >
          <h2 ref={_subtitle => (subtitle = _subtitle)}>Don't spell part backwards. It's a trap!</h2>
        
          <div>
              <img className="image" src={'https://pbs.twimg.com/profile_images/23999002/ackbar_400x400.gif'} alt="General Ackbar" />
          </div>
         <button onClick={closeModal}>close</button>
        </Modal>
      </div>
    );
};

 //ReactDOM.render(<App />, appElement);