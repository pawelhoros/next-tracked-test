import { useTracked } from '../global.state';

const Bananas = () => {
  const [state, dispatch] = useTracked();

  const handleAddBanana = () => {
    dispatch({
      type: 'ADD_BANANA',
    });
  };

  return (
    <div>
      <div>Bananas:</div>
      <div>{state.bananas}</div>
      <div>{Math.random()}</div>
      <button onClick={handleAddBanana}>Add banana</button>
    </div>
  );
};

export default Bananas;
