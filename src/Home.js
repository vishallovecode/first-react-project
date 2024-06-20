
import './App.css';
import { heading, heading2 } from './constant';

// receiver  file 
function Home() {
  console.log('Hurrah ... we are consoling some thing...')

  return (
    <div className="App">
      <h1>{heading}</h1>
      <h2>{heading2}</h2>
      <h1>AAO Sikhe React..🥵</h1>
    </div>
  );
}

export default Home;

// App is reacrt component you can call it like  //  <App/>

