const MoodsList = (props) => {
  return (
    <ul>
      {props.items.map((mood) => {
        return <p>{mood}</p>;
      })}
    </ul>
  );
};

export default MoodsList;
