import { useTracked } from '../global.state';

const Apples = () => {
  const [state, dispatch] = useTracked();

  const handleAddApple = () => {
    dispatch({
      type: 'ADD_APPLE',
    });
  };

  return (
    <div>
      <div>Apples:</div>
      <div>{state.apples}</div>
      <div>{Math.random()}</div>
      <button onClick={handleAddApple}>Add apple</button>
    </div>
  );
};

export default Apples;
