import classes from './MonthTrackerItem.module.css';

const MonthTrackerItem = (props) => {
  return (
    <div
      className={`${classes['month-tracker-item']} ${
        props.mood.color + '-background'
      }`}
    >
      <div>{props.number}</div>
    </div>
  );
};

export default MonthTrackerItem;
