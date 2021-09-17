import React, { useState } from 'react';

import classes from './MoodForm.module.css';
import Button from '../UI/Button';

const MoodForm = (props) => {
  const [enteredMood, setEnteredMood] = useState('happy');
  const [selectedOption, setSelectedOption] = useState('happy');

  const submitHandler = (event) => {
    event.preventDefault();

    props.onSaveNewMood(enteredMood);
  };

  const moodChangeHandler = (event) => {
    setEnteredMood(event.target.value);
    setSelectedOption(event.target.value);
  };

  return (
    <form onSubmit={submitHandler} className={classes['new-mood-main-form']}>
      <div className={classes['new-mood-form-section']}>
        <label htmlFor="mood-selector">Select your mood:</label>
        <select
          name="mood-selector"
          id="mood-selector"
          onChange={moodChangeHandler}
          className={classes[selectedOption]}
          defaultValue={'happy'}
        >
          <option value="really-happy" className={classes['really-happy']}>
            Really Happy 😃
          </option>

          <option value="happy" className={classes['happy']}>
            Happy 🙂
          </option>

          <option value="ok" className={classes['ok']}>
            Ok 😑
          </option>

          <option value="sad" className={classes['sad']}>
            Sad 🙁
          </option>

          <option value="really-sad" className={classes['really-sad']}>
            Really sad 😢
          </option>
        </select>
      </div>

      <div className={classes['new-mood--actions']}>
        <Button type="submit">Add new mood</Button>
      </div>
    </form>
  );
};

export default MoodForm;
