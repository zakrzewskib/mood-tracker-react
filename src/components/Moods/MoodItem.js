const MoodItem = (props) => {
  return (
    <li>
      <div>{props.date}</div>
      <div>{props.mood}</div>
      <div>{props.comment}</div>
    </li>
  );
};

export default MoodItem;
