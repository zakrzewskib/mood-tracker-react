import Date from '../UI/Date';

import classes from './MoodItem.module.css';

const MoodItem = (props) => {
  return (
    <li>
      <div>
        <Date date={props.date} />
      </div>
      <div className={classes['mood-description']}>
        <div>{props.mood}</div>
        <div>{props.comment}</div>
      </div>
    </li>
  );
};

export default MoodItem;
