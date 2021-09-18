import React, { useState } from 'react';

import MainHeader from './components/UI/MainHeader';
import Moods from './components/Moods/Moods';
import NewMood from './components/AddMood/NewMood';
import MonthTracker from './components/Charts/MonthTracker';

const App = () => {
  const sampleMoodsData = [];

  const defineStartedMoodsSeptember2021 = () => {
    for (let i = 1; i <= 31 + 2; i++) {
      if (i === 1 || i === 2 || i === 3) {
        starterMoods.push({
          dayNumber: '',
          monthNumber: '',
          yearNumber: '',
          mood: 'undefined',
          id: Math.random().toString(),
        });
      } else {
        starterMoods.push({
          dayNumber: i - 3,
          monthNumber: 9,
          yearNumber: 2021,
          mood: 'undefined',
          id: Math.random().toString(),
        });
      }
    }
  };

  const [moods, setMoods] = useState(sampleMoodsData);

  const starterMoods = [];
  defineStartedMoodsSeptember2021();

  const [moodsForTracker, setMoodsForTracker] = useState(starterMoods);

  const changeColorInTracker = (mood) => {
    let index = moodsForTracker.findIndex(
      (item) =>
        item.dayNumber === mood.date.getDate() &&
        item.monthNumber === mood.date.getMonth() + 1 &&
        item.yearNumber === mood.date.getFullYear()
    );

    let updatedMoods = [...moodsForTracker];

    let newItem = { ...moodsForTracker[index] };

    newItem.mood = mood.mood;

    updatedMoods[index] = newItem;

    setMoodsForTracker(updatedMoods);
  };

  const addNewMoodHandler = (mood) => {
    setMoods((prevMoods) => [mood, ...prevMoods]);
    setMoods((prevMoods) =>
      prevMoods.sort((a, b) => a.date.getDate() - b.date.getDate())
    );

    changeColorInTracker(mood);
  };

  return (
    <div>
      <MainHeader />

      <div className="outside-container">
        <div>
          <NewMood onAddNewMood={addNewMoodHandler} />

          <Moods items={moods} />
        </div>

        <MonthTracker moods={moodsForTracker} />
      </div>
    </div>
  );
};

export default App;
