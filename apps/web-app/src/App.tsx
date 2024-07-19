import { add } from 'common';
import { SharedComponent } from 'shared-ui';
const App = () => {
  return (
    <>
      <p>Total - {add(5)}</p>
      <SharedComponent />
    </>
  );
};

export default App;
