import classes from './ErrorModal.module.css';

import Button from './Button';

const ErrorModal = (props) => {
  const confirm = () => {
    props.onConfirm(true);
  };

  const cancel = () => {
    props.onConfirm(false);
  };

  return (
    <div>
      <div className={classes.backdrop}></div>
      <div className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>

        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={confirm}>Yes</Button>
          <Button onClick={cancel}>No</Button>
        </footer>
      </div>
    </div>
  );
};

export default ErrorModal;
