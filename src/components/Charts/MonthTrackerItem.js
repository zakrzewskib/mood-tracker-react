import classes from './MonthTrackerItem.module.css';

const MonthTrackerItem = (props) => {
  console.log(props);
  return (
    <div
      className={`${classes['month-tracker-item']} ${
        props.mood + '-background'
      }`}
    >
      <div className={classes['day-number']}>{props.number}</div>
    </div>
  );
};

export default MonthTrackerItem;
