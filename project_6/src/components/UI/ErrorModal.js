import ReactDom from 'react-dom';
import Button from "../UI/Button";

import styles from './ErrorModal.module.css';

const Backdrop = (props) => {
  return (
    <div className={styles.backdrop} onClick={props.onCloseModal} />
  );
};

const Modal = (props) => {
  return (
    <div className={styles.modal}>
      <header className={styles.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={styles.content}>
        <p>{props.message}</p>
      </div>
      <footer className={styles.footer}>
        <Button onClick={props.onCloseModal}>Close</Button>
      </footer>
    </div>
  );
};

const ErrorModal = (props) => {
  return (
    <>
      {ReactDom.createPortal(
        <Backdrop onCloseModal={props.onCloseModal} />,
        document.getElementById('backdrop')
      )}
      {ReactDom.createPortal(
        <Modal title={props.title} message={props.message} onCloseModal={props.onCloseModal} />,
        document.getElementById('modal')
      )}
    </>
  );
};

export default ErrorModal;