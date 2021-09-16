import MoodForm from './MoodForm';

const NewMood = (props) => {
  const saveNewMoodHandler = (mood) => {
    props.onAddNewMood(mood);
  };

  return <MoodForm onSaveNewMood={saveNewMoodHandler} />;
};

export default NewMood;
