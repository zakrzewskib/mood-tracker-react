import MoodItem from './MoodItem';

const MoodsList = (props) => {
  return (
    <ul>
      {props.items.map((mood) => {
        return (
          <MoodItem
            key={mood.id}
            mood={mood.mood}
            date={mood.date}
            comment={'test'}
          />
        );
      })}
    </ul>
  );
};

export default MoodsList;
