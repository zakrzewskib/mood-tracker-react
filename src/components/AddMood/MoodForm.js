import React, { useState } from 'react';

const MoodForm = (props) => {
  const [enteredMood, setEnteredMood] = useState('happy');

  const submitHandler = (event) => {
    event.preventDefault();

    props.onSaveNewMood(enteredMood);
  };

  const moodChangeHandler = (event) => {
    setEnteredMood(event.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="mood-selector">Select your mood</label>
      <select
        name="mood-selector"
        id="mood-selector"
        onChange={moodChangeHandler}
      >
        <option value="happy">🙂</option>
        <option value="sad">🙁</option>
      </select>

      <button type="submit">Add new Mood</button>
    </form>
  );
};

export default MoodForm;
