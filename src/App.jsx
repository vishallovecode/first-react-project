
import './App.css';


import   Sqaure from './components/Square';
import Card from './components/card/card';
import Counter from './components/counter';
  '../../'
// receive  file 
function App() {
  return (
    <div className="App">
      {/* <Sqaure>Hey</Sqaure> */}
      <div>
      <Card/>
      <Counter/>
      </div>
    </div>
  );
}

export default App;

// App is reacrt component you can call it like  //  <App/>

