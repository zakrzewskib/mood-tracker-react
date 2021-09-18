import React, { useState } from 'react';

import MainHeader from './components/UI/MainHeader';
import Moods from './components/Moods/Moods';
import NewMood from './components/AddMood/NewMood';
import ErrorModal from './components/UI/ErrorModal';
import MonthTracker from './components/Charts/MonthTracker';

const App = () => {
  const [error, setError] = useState();
  const [replaceTheSameDate, setReplaceTheSameDate] = useState(true);

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

  const setSameDateError = (mood) => {
    if (
      moods.filter((e) => e.date.toISOString() === mood.date.toISOString())
        .length > 0
    ) {
      console.log('Do you want to replace mood in that day?');

      setError({
        title: 'You already defined mood in that day!',
        message: 'Do you want to replace mood in that day?',
      });
    }
  };

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
    setSameDateError(mood);

    if (replaceTheSameDate) {
      setMoods((prevMoods) => [mood, ...prevMoods]);
      setMoods((prevMoods) =>
        prevMoods.sort((a, b) => a.date.getDate() - b.date.getDate())
      );

      changeColorInTracker(mood);
    }
  };

  const errorHandler = (option) => {
    setError(null);
    setReplaceTheSameDate(option);
    console.log(replaceTheSameDate);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}

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
