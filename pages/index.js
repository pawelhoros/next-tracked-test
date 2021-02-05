import Apples from '../components/Apples';
import Bananas from '../components/Bananas';
import { useTracked } from '../global.state';

export default function Home() {
  //I just found out it works fine when lines 7-13 are commented out and no button on main page (line 20)
  //so it's unrelated to next.js (in cra there is same)
  const [state, dispatch] = useTracked();

  const handleAddBanana = () => {
    dispatch({
      type: 'ADD_BANANA',
    });
  };

  return (
    <div>
      <Apples />
      <Bananas />
      <br />
      <button onClick={handleAddBanana}>Add banana from main page</button>
    </div>
  );
}
