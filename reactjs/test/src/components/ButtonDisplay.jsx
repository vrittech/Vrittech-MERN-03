const ButtonDisplay = (props) => {
  console.log("here from app", props);
  return <button>{props.value}</button>;
};

export default ButtonDisplay;
