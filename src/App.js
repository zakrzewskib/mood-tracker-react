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
          date: '',
          mood: 'undefined',
          id: Math.random().toString(),
        });
      } else {
        let date = new Date();
        date.setDate(i - 3);
        date.setFullYear(2021);
        date.setMonth(9 - 1);

        starterMoods.push({
          date: date,
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
        // TODO Compare dates without time
        item.date !== '' && item.date.getDate() === mood.date.getDate()
    );

    let updatedMoods = [...moodsForTracker];

    let newItem = { ...moodsForTracker[index] };

    newItem.mood = mood.mood;

    updatedMoods[index] = newItem;

    setMoodsForTracker(updatedMoods);
  };

  const addNewMoodHandler = (mood, replaced) => {
    console.log(replaced);
    if (replaced) {
      setMoods((prevMoods) => {
        return prevMoods.filter(
          (item) => item.date.toISOString() !== mood.date.toISOString()
        );
      });
    }

    setMoods((prevMoods) => [...prevMoods, mood]);

    setMoods((prevMoods) =>
      prevMoods.sort((a, b) => a.date.getDate() - b.date.getDate())
    );

    changeColorInTracker(mood);
  };

  const addMoodWithItemHandler = (date) => {
    const mood = {
      mood: '🙂',
      date: new Date(date),
      comment: '',
      color: '🙂',
      id: Math.random().toString(),
    };

    const found = moods.find(
      (item) => item.date.getDate() === mood.date.getDate()
    );

    addNewMoodHandler(mood, found ? true : false);
  };

  return (
    <div>
      <MainHeader />

      <div className="outside-container">
        <div>
          <NewMood onAddNewMood={addNewMoodHandler} />

          <Moods items={moods} />
        </div>

        <MonthTracker
          moods={moodsForTracker}
          addMoodWithItem={addMoodWithItemHandler}
        />
      </div>
    </div>
  );
};

export default App;
