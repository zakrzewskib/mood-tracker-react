import classes from './MainHeader.module.css';

const MainHeader = (props) => {
  return (
    <header>
      <h1 className={classes['heading-primary']}>
        <div className={classes['heading-primary--first-word']}>Mood</div>
        <div className={classes['heading-primary--second-word']}>TRACKER</div>
      </h1>
    </header>
  );
};

export default MainHeader;
