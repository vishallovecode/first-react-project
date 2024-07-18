
import { useEffect } from 'react';
import './App.css';
import JSXExample from './components/JSXExample/jsxexample';
import ExampleListing from './components/Listing';
import MovieCard from './components/MovieCard/MovieCard';


import   Sqaure from './components/Square';
import Card from './components/card/card';
import ThemeChanger from './components/colorChanger';
import Counter from './components/counter';
import CustomCard from './components/customcard';
import InlineStyling from './components/inlineStyle';
// import PropsExample from './components/propsExample';
import Timer from './components/timer';
import UseEffectExample from './components/useEffect';
import WordCounter from './components/wordounter';
import MovieListing from './container/movieLisitng';

// receive  file 
function App() {

  useEffect(()=>{
    console.log('I will get call only once..... app')
  } ,[])


  return (
    <div className="App">
      {/* <Sqaure>Hey</Sqaure> */}
      {/* <Card/> */}
      {/* <Counter/> */}
      {/* <CustomCard img={"https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"} description={"Chalo sikh lia ha props"} heading={'Kya aya samja props me??'}/>
      <CustomCard img={"data:image/jpeg;base64,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"} description={"Chalo sikh lia ha props"} heading={'Kya aya samja props me??'}/>

      <CustomCard img={"https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"} description={"Chalo sikh lia ha props"} heading={'Kya aya samja props me??'}/>

      <CustomCard img={"https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"} description={"Chalo sikh lia ha props"} heading={'Kya aya samja props me??'}/>

      <CustomCard img={"https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"} description={"Chalo sikh lia ha props"} heading={'Kya aya samja props me??'}/>

      <CustomCard img={"https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"} description={"Chalo sikh lia ha props"} heading={'Kya aya samja props me??'}/>

       <CustomCard img={"https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"} description={"Chalo sikh lia ha props"} heading={'Kya aya samja props me??'}/> */}
      {/* <JSXExample/> */}
      {/* <InlineStyling/> */}
      {/* <Timer/> */}
      {/* <ThemeChanger/>
       */}
       {/* <CustomCard img={"https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"} description={"Chalo sikh lia ha props"} heading={'Kya aya samja props me??'}/>
       <WordCounter/> */}
       {/* <MovieCard 
       imageUrl={'https://image.tmdb.org/t/p/original/hek3koDUyRQk7FIhPXsa6mT2Zc3.jpg'}
       title={"The Shawshank Redemption"}
       votes= {123}
       rating ={3.4}
       /> */}
      {/* <MovieCard 
       imageUrl={'https://image.tmdb.org/t/p/original/hek3koDUyRQk7FIhPXsa6mT2Zc3.jpg'}
       title={"The  Coolie"}
       votes= {234567}
       rating ={4.4}
       /> */}
       {/* <MovieListing/> */}

       {/* <ThemeChanger/> */}
            {/* <JSXExample/> */}
            {/* <PropsExample/> */}
            {/* <ExampleListing/> */}
            <UseEffectExample/>
    </div>
  );
}

export default App;

// App is reacrt component you can call it like  //  <App/>

