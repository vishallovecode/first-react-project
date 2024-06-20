
import './App.css';
import { clothes , myShoes } from './constant';
import ButtonHaYar from  './button'

// receiver  file 
function Home() {
 
  return (
    <div className="App">
      <h1>{myShoes}</h1>
      <h2>{clothes}</h2>
      <h1>AAO Sikhe React..🥵</h1>
      {/* Button Component */}
      <ButtonHaYar/> 
    
    </div>
  );
}

export default Home;

// App is reacrt component you can call it like  //  <App/>

