import React, { useState } from 'react';

import classes from './MoodForm.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const MoodForm = (props) => {
  const [error, setError] = useState();
  const [dates, setDates] = useState([]);
  const [replace, setReplace] = useState(true);

  const errorHandler = (option) => {
    setError(null);
    setReplace(option);
  };

  const defaultOption = '🙂';
  const date = new Date().toISOString().substr(0, 10);

  const [enteredMood, setEnteredMood] = useState(defaultOption);

  const [selectedOptionClass, setSelectedOptionClass] = useState(defaultOption);

  const [enteredDate, setEnteredDate] = useState(date);
  const [enteredComment, setEnteredComment] = useState('');

  const setSameDateError = (mood) => {
    if (
      dates.filter((e) => e.toISOString() === mood.date.toISOString()).length >
      0
    ) {
      setError({
        title: 'You already defined mood in that day!',
        message: 'Do you want to replace mood in that day?',
      });
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const mood = {
      mood: enteredMood,
      date: new Date(enteredDate),
      comment: enteredComment,
      color: selectedOptionClass,
      id: Math.random().toString(),
    };

    setDates((prevDates) => [...prevDates, mood.date]);
    setSameDateError(mood);

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
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}

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
            cols="33"
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
    </div>
  );
};

export default MoodForm;
