import React, { useState } from 'react';

import classes from './MoodForm.module.css';
import Button from '../UI/Button';

const MoodForm = (props) => {
  const defaultOption = '🙂';
  const date = new Date().toISOString().substr(0, 10);

  const [enteredMood, setEnteredMood] = useState(defaultOption);

  const [selectedOptionClass, setSelectedOptionClass] = useState(defaultOption);

  const [enteredDate, setEnteredDate] = useState(date);
  const [enteredComment, setEnteredComment] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();

    const mood = {
      mood: enteredMood,
      date: new Date(enteredDate),
      comment: enteredComment,
      color: selectedOptionClass,
      id: Math.random().toString(),
    };

    setEnteredComment('');

    props.onSaveNewMood(mood);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const commentChangeHandler = (event) => {
    setEnteredComment(event.target.value);
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
          className={selectedOptionClass}
          defaultValue={defaultOption}
        >
          <option value="😃" className="😃">
            Really Happy 😃
          </option>

          <option value="🙂" className="🙂">
            Happy 🙂
          </option>

          <option value="😑" className="😑">
            Ok 😑
          </option>

          <option value="🙁" className="🙁">
            Sad 🙁
          </option>

          <option value="😢" className="😢">
            Really sad 😢
          </option>
        </select>
      </div>

      <div className={classes['new-mood-form-section']}>
        <label htmlFor="date">Select date:</label>

        <input
          id="date"
          type="date"
          defaultValue={date}
          onChange={dateChangeHandler}
        />
      </div>

      <div className={classes['new-mood-form-section']}>
        <textarea
          name="comment"
          id="comment"
          cols="35"
          rows="1"
          placeholder="Add comment about your day (optional)"
          onChange={commentChangeHandler}
          value={enteredComment}
        ></textarea>
      </div>

      <div className={classes['new-mood-form-section']}>
        <Button type="submit">Add new mood</Button>
      </div>
    </form>
  );
};

export default MoodForm;
