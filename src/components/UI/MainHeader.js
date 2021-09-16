import classes from './MainHeader.module.css';

const MainHeader = (props) => {
  return (
    <header>
      <h1 className={classes['heading-primary']}>{props.content}</h1>
    </header>
  );
};

export default MainHeader;
