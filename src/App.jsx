
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
import PropsExample from './components/propsExample';
import Timer from './components/timer';
import UseEffectExample from './components/useEffect';
import WordCounter from './components/wordounter';
import MovieListing from './container/movieLisitng';
import Button from './components/button';
import ExampleKeys from './components/KeyListing';
import Input from './components/Input';
import TwoWayBinding from './container/twowaybinding';
import FirstComponent from './classComponent/firstComponent';
import LifeCycleMethod from './classComponent/lifeCycleMethod';
import Header from './components/header';
import { Routes , Route } from 'react-router-dom';
import ProductListing from './container/productlisting';
import SingleProductDetails from './components/productdetails';
import NotFound from './components/not-found';

// receive  file 
function App() {

  useEffect(()=>{
    console.log('I will get call only once..... app')
  } ,[])


 
  return (
    <div className="App">
      <Header/>
            <Routes>
              <Route path='/square' element= {<Sqaure/>}/>
              <Route path='/Card' element= {<Card/>}/>
              <Route path='/counter' element= {<Counter/>}/>
              <Route path='/customCard' element= {<CustomCard img={"https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"} description={"Chalo sikh lia ha props"} heading={'Kya aya samja props me??'}/>}/>
              <Route path='/jsxeample' element= {<JSXExample/>}/>
              <Route path='/inlinestyle' element= {<InlineStyling/>}/>
              <Route path='/timer' element= {<Timer/>}/>
              <Route path='/theme' element= {<ThemeChanger/>}/>
              <Route path='/wordcounter' element= {<WordCounter/>}/>
              <Route path='/moviecard' element= {<MovieCard 
                                                  imageUrl={'https://image.tmdb.org/t/p/original/hek3koDUyRQk7FIhPXsa6mT2Zc3.jpg'}
                                                  title={"The Shawshank Redemption"}
                                                  votes= {123}
                                                  rating ={3.4}
                  /> }/>
              <Route path='/movie-listing' element= {<MovieListing/>}/>
              <Route path='/props' element= {<PropsExample/>}/>
              <Route path='/examplelisting' element= {<ExampleListing/>}/>
              <Route path='/key-example' element= {<ExampleKeys/>}/>
              <Route path='/lifecycle' element= {<LifeCycleMethod/>}/>
              <Route path='/square' element= {<Sqaure/>}/>
              <Route path='/class-component' element= {<FirstComponent/>}/>
              <Route path='/useffect' element= {<UseEffectExample/>}/>
              <Route path = '/productlisting' element= {<ProductListing/>}/> 
            
              {/* Dynamic Routing */}
              <Route path='products/:productId' element= {<SingleProductDetails/>}/>
              <Route path='*' element= {<NotFound/>}/>
    
            </Routes>
    
    </div>
  );
}

export default App;

// App is reacrt component you can call it like  //  <App/>

// every props have default properties called children.
// children properties is the value b/w open tag and close tag



{/* <Card>
  {
    big Jsx code thousands of line
  }
</Card>

props.children */}