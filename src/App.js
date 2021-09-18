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
          mood: 'undefined',
          id: Math.random().toString(),
        });
      } else {
        starterMoods.push({
          dayNumber: i - 3,
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

  const checkIfEnteredSameDate = (mood) => {
    if (
      moods.filter((e) => e.date.toISOString() === mood.date.toISOString())
        .length > 0
    ) {
      console.log('Do you want to replace mood in that day?');
    }
  };

  const changeColorInTracker = (mood) => {
    let index = moodsForTracker.findIndex(
      (item) => item.dayNumber === mood.date.getDate()
    );

    let updatedMoods = [...moodsForTracker];

    let newItem = { ...moodsForTracker[index] };

    newItem.mood = mood.mood;

    updatedMoods[index] = newItem;

    setMoodsForTracker(updatedMoods);
  };

  const addNewMoodHandler = (mood) => {
    checkIfEnteredSameDate(mood);

    setMoods((prevMoods) => [...prevMoods, mood]);

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
