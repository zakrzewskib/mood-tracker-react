import React, { useState } from 'react';

import MainHeader from './components/UI/MainHeader';
import Moods from './components/Moods/Moods';
import NewMood from './components/AddMood/NewMood';

const App = () => {
  const [moods, setMoods] = useState([]);

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
