import React, { useState } from 'react';

import MainHeader from './components/UI/MainHeader';
import Moods from './components/Moods/Moods';
import NewMood from './components/AddMood/NewMood';

import MonthTracker from './components/Charts/MonthTracker';

const App = () => {
  const [number, setNumber] = useState(0);

  const SAMPLE_DATA = [];

  const [moods, setMoods] = useState(SAMPLE_DATA);

  const starterMoods = [];

  for (let i = 1; i <= 31; i++) {
    starterMoods.push({
      dayNumber: i,
      mood: 'undefined',
      id: Math.random().toString(),
    });
  }

  const [moodsForTracker, setMoodsForTracker] = useState(starterMoods);

  const addNewMoodHandler = (mood) => {
    // if (moods.length > 0) {
    //   console.log(mood.date.toISOString() === moods[0].date.toISOString());
    // }
    if (
      moods.filter((e) => e.date.toISOString() === mood.date.toISOString())
        .length > 0
    ) {
      console.log('Do you want to replace mood in that day?');
    }
    setMoods((prevMoods) => [...prevMoods, mood]);

    let index = moodsForTracker.findIndex(
      (item) => item.dayNumber === mood.date.getDate()
    );

    let updatedMoods = [...moodsForTracker];

    let newItem = { ...moodsForTracker[index] };

    newItem.dayNumber = 50;

    updatedMoods[index] = newItem;

    setMoodsForTracker(updatedMoods);
    setNumber((number) => number + 1);
  };

  return (
    <div>
      <MainHeader />

      <div className="outside-container">
        <div>
          <NewMood onAddNewMood={addNewMoodHandler} />

          <Moods items={moods} />
        </div>

        <MonthTracker moods={moodsForTracker} number={number} />
      </div>
    </div>
  );
};

export default App;
