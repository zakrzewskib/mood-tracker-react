import React, { useState } from 'react';

import MainHeader from './components/UI/MainHeader';
import Moods from './components/Moods/Moods';
import NewMood from './components/AddMood/NewMood';

import MonthTracker from './components/Charts/MonthTracker';

const App = () => {
  const SAMPLE_DATA = [
    // {
    //   mood: '🙂',
    //   date: new Date(),
    //   comment: 'I felt happy that day',
    //   id: Math.random().toString(),
    // },
    // {
    //   mood: '🙂',
    //   date: new Date(),
    //   comment: 'I felt happy that day',
    //   id: Math.random().toString(),
    // },
    // {
    //   mood: '🙂',
    //   date: new Date(),
    //   comment: 'I felt happy that day',
    //   id: Math.random().toString(),
    // },
    // {
    //   mood: '🙂',
    //   date: new Date(),
    //   comment: 'I felt happy that day',
    //   id: Math.random().toString(),
    // },
    // {
    //   mood: '🙂',
    //   date: new Date(),
    //   comment: 'I felt happy that day',
    //   id: Math.random().toString(),
    // },
  ];

  const [moods, setMoods] = useState(SAMPLE_DATA);

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
  };

  return (
    <div>
      <MainHeader />

      <div className="outside-container">
        <div>
          <NewMood onAddNewMood={addNewMoodHandler} />

          <Moods items={moods} />
        </div>

        <MonthTracker items={moods} />
      </div>
    </div>
  );
};

export default App;
