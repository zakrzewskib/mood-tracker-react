import classes from './MonthTracker.module.css';

import MonthTrackerItem from './MonthTrackerItem';

const MonthTracker = (props) => {
  return (
    <div className={classes['month-tracker']}>
      <div className={classes['week-day']}>Mon</div>
      <div className={classes['week-day']}>Tues</div>
      <div className={classes['week-day']}>Wed</div>
      <div className={classes['week-day']}>Thur</div>
      <div className={classes['week-day']}>Fri</div>
      <div className={classes['week-day']}>Sat</div>
      <div className={classes['week-day']}>Sun</div>

      {props.moods.map((mood) => (
        <MonthTrackerItem
          key={mood.id}
          mood={mood.mood}
          number={mood.dayNumber}
        />
      ))}
    </div>
  );
};

export default MonthTracker;
