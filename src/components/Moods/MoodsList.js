import MoodItem from './MoodItem';

const MoodsList = (props) => {
  return (
    <ul>
      {props.items.map((mood) => {
        return <MoodItem key={mood.id} mood={mood.mood} />;
      })}
    </ul>
  );
};

export default MoodsList;
