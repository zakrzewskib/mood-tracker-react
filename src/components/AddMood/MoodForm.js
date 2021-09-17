import React, { useState } from 'react';

import classes from './MoodForm.module.css';
import Button from '../UI/Button';

const MoodForm = (props) => {
  let today = new Date();
  const date = today.toISOString().substr(0, 10);

  const [enteredMood, setEnteredMood] = useState('happy');
  const [enteredDate, setEnteredDate] = useState(date);

  const [selectedOptionClass, setSelectedOptionClass] = useState('happy');

  const submitHandler = (event) => {
    event.preventDefault();

    const mood = {
      mood: enteredMood,
      date: enteredDate,
      id: Math.random().toString(),
    };

    props.onSaveNewMood(mood);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const moodChangeHandler = (event) => {
    setEnteredMood(event.target.value);
    setSelectedOptionClass(event.target.value);
  };

  return (
    <form
      onSubmit={submitHandler}
      className={`${classes['new-mood-main-form']} container`}
    >
      <div className={classes['new-mood-form-section']}>
        <label htmlFor="mood-selector">Select your mood:</label>
        <select
          name="mood-selector"
          id="mood-selector"
          onChange={moodChangeHandler}
          className={classes[selectedOptionClass]}
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

      <div className={classes['new-mood-form-section']}>
        <label htmlFor="">Select date:</label>
        <input type="date" defaultValue={date} onChange={dateChangeHandler} />
      </div>

      <div className={classes['new-mood--actions']}>
        <Button type="submit">Add new mood</Button>
      </div>
    </form>
  );
};

export default MoodForm;
