import React, { useState } from 'react';

import classes from './MonthTracker.module.css';

import MonthTrackerItem from './MonthTrackerItem';

const MonthTracker = (props) => {
  const starterMoods = [];

  for (let i = 1; i <= 31; i++) {
    starterMoods.push({
      dayNumber: i,
      mood: 'undefined',
      id: Math.random().toString(),
    });
  }

  // let updatedMoods;

  // const updateMoods = (newMood) => {
  //   if (newMood) {
  //     let index = moods.findIndex(
  //       (item) => item.dayNumber === newMood.date.getDate()
  //     );
  //     updatedMoods = [...moods];
  //     updatedMoods[index].mood = newMood.mood;
  //     setMoods(updatedMoods);
  //   }
  // };

  console.log(props.moods);

  return (
    <div className={classes['month-tracker']}>
      <div className={classes['week-day']}>Mon</div>
      <div className={classes['week-day']}>Tues</div>
      <div className={classes['week-day']}>Wed</div>
      <div className={classes['week-day']}>Thur</div>
      <div className={classes['week-day']}>Fri</div>
      <div className={classes['week-day']}>Sat</div>
      <div className={classes['week-day']}>Sun</div>
      <div>{props.number}</div>

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
