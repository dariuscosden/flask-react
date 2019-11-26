import React from 'react';

// internal dependenies
//
import TextInput from 'components/text-input';
import TextArea from 'components/text-area';
import Button from 'components/button';

const Modal = (props) => {
  const { closeModal } = props;

  return (
    <div className="modal__background" onClick={closeModal}>
      <div className="modal__container" onClick={(e) => e.stopPropagation()}>
        <div className="modal__headline">
          <h2>Get in touch with me.</h2>
          <a href="mailto:me@cosden.io">
            <small>
              <i>me@cosden.io</i>
            </small>
          </a>
        </div>

        <form className="modal__form">
          <TextInput label="What is your email?" />
          <TextArea label="What is your message?" />
          <Button text="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Modal;
