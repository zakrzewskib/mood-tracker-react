import React, { useState } from 'react';

import MainHeader from './components/UI/MainHeader';
import Moods from './components/Moods/Moods';
import NewMood from './components/AddMood/NewMood';

const App = () => {
  const SAMPLE_DATA = [
    {
      mood: '🙂',
      date: new Date(),
      comment: 'I felt happy that day',
      id: Math.random().toString(),
    },
    {
      mood: '🙂',
      date: new Date(),
      comment: 'I felt happy that day',
      id: Math.random().toString(),
    },
    {
      mood: '🙂',
      date: new Date(),
      comment: 'I felt happy that day',
      id: Math.random().toString(),
    },
    {
      mood: '🙂',
      date: new Date(),
      comment: 'I felt happy that day',
      id: Math.random().toString(),
    },
    {
      mood: '🙂',
      date: new Date(),
      comment: 'I felt happy that day',
      id: Math.random().toString(),
    },
  ];

  const [moods, setMoods] = useState(SAMPLE_DATA);

  const addNewMoodHandler = (mood) => {
    console.log(mood);
    setMoods((prevMoods) => [...prevMoods, mood]);
  };

  return (
    <div>
      <MainHeader />

      <NewMood onAddNewMood={addNewMoodHandler} />

      <Moods items={moods} />
    </div>
  );
};

export default App;
