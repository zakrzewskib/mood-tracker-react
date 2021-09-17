import classes from './MonthTracker.module.css';

import MonthTrackerItem from './MonthTrackerItem';

const MonthTracker = (props) => {
  const days = [];
  for (let i = 1; i <= 31; i++) {
    days.push(i);
  }

  return (
    <div className={classes['month-tracker']}>
      <div className={classes['week-day']}>Mon</div>
      <div className={classes['week-day']}>Tues</div>
      <div className={classes['week-day']}>Wed</div>
      <div className={classes['week-day']}>Thur</div>
      <div className={classes['week-day']}>Fri</div>
      <div className={classes['week-day']}>Sat</div>
      <div className={classes['week-day']}>Sun</div>
      {props.items.map((mood) => (
        <MonthTrackerItem key={mood.id} mood={mood} number={1} />
      ))}
    </div>
  );
};

export default MonthTracker;
