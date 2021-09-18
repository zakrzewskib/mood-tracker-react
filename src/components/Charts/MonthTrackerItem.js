import classes from './MonthTrackerItem.module.css';

const MonthTrackerItem = (props) => {
  const addMood = () => {
    props.addMoodWithItem(props.number);
  };

  return (
    <div
      className={`${classes['month-tracker-item']} ${
        props.mood + '-background'
      }`}
      onClick={addMood}
    >
      <div className={classes['day-number']}>{props.number}</div>
    </div>
  );
};

export default MonthTrackerItem;
