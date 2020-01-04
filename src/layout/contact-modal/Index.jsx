import React, { useEffect, useState, useRef } from 'react';

// internal dependenies
//
import TextInput from 'components/text-input';
import TextArea from 'components/text-area';
import Button from 'components/button';

const Modal = (props) => {
  const { closeModal } = props;

  // modal background
  const modalBackground = useRef(null);
  useEffect(() => {
    modalBackground.current.style.opacity = '1';
  }, [modalBackground]);

  // modal container
  const modalContainer = useRef(null);
  useEffect(() => {
    modalContainer.current.style.transform = 'translateY(0px)';
  }, [modalContainer]);

  return (
    <div
      ref={modalBackground}
      className="modal__background"
      onClick={closeModal}
    >
      <div
        ref={modalContainer}
        className="modal__container"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal__left">
          <img src="/assets/img/shared/contact.png" />
        </div>

        <div className="modal__right">
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
    </div>
  );
};

export default Modal;
