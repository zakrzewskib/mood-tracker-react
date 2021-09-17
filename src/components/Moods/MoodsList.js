import MoodItem from './MoodItem';

import classes from './MoodsList.module.css';

const MoodsList = (props) => {
  return (
    <ul className={`${classes['moods-list']} container`}>
      {props.items.map((mood) => {
        return (
          <MoodItem
            key={mood.id}
            mood={mood.mood}
            date={mood.date}
            comment={mood.comment}
            color={mood.color}
          />
        );
      })}
    </ul>
  );
};

export default MoodsList;
