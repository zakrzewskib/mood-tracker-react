import React, { useState } from 'react';

import classes from './MoodForm.module.css';

const MoodForm = (props) => {
  const [enteredMood, setEnteredMood] = useState('happy');
  const secondOptionSelected = true;

  const submitHandler = (event) => {
    event.preventDefault();

    props.onSaveNewMood(enteredMood);
  };

  const moodChangeHandler = (event) => {
    setEnteredMood(event.target.value);
  };

  return (
    <form onSubmit={submitHandler} className={classes['new-mood-main-form']}>
      <div className={classes['new-mood-form-section']}>
        <label htmlFor="mood-selector">Select your mood:</label>
        <select
          name="mood-selector"
          id="mood-selector"
          onChange={moodChangeHandler}
          className={secondOptionSelected ? classes['green-mood'] : ''}
        >
          <option value="happy">Happy 🙂</option>
          <option value="sad" className={classes['green-mood']}>
            Sad 🙁
          </option>
        </select>
      </div>

      <div className={classes['new-mood--actions']}>
        <button type="submit">Add new Mood</button>
      </div>
    </form>
  );
};

export default MoodForm;
