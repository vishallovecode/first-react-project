
import './App.css';
import Button from './button';

import   Sqaure from './components/Square';
import Card from './components/card/card';
  '../../'
// receive  file 
function App() {
  return (
    <div className="App">
      {/* <Sqaure>Hey</Sqaure> */}
      <div>
      <Button/>
      <Card/>
      </div>
    </div>
  );
}

export default App;

// App is reacrt component you can call it like  //  <App/>

