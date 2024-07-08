
import { useState } from 'react';
import './style.css'

function WordCounter() {
  const [paragraph , setParagraph] = useState('')
  const[limit , setLimit] = useState(50)
  const [range , setRange]= useState('16')
  const [errorMessage , setErrorMessage]= useState('')

  function onChangeLimit(e) {
    setLimit(e.target.value)
  }
  function onChange(event) {
      let count  = countWords(event.target.value);
      console.log(event)
      if(count<=limit) {
        setParagraph(event.target.value)
      } else {
        setErrorMessage(`Word  limit is ${limit} for text area , You have exhausted that limit. Please increase from above`)
        const s = event.target.value;
        const ss = s.split(' ').slice(0, limit).join(' ');
        setParagraph(ss)
      } 
    
  }
  function countWords(value){
    if(value ==='') return  0;
    return value?.split(' ').length;
  }

  function rangeChange(event) {
    setRange(event.target.value)
  }

    return (
      <div className='container'>
        <div>Font Size Picker</div>
        <input type='range'value={range} min={16} max={32} onChange={rangeChange}/>
        <div>Word Limit Count</div>
        <input  type='number' defaultValue={limit}  onChange={onChangeLimit} />
        <textarea rows="10" cols="50" value={paragraph} onChange={onChange} style={{fontSize:`${range}px`}}/>
        <div style={{color:'red'}}>{errorMessage}</div>
        <div>Total number of words written {countWords(paragraph)}</div>
        <div>Total number of character used {paragraph.length}</div>
      </div>
    )
}


export default WordCounter;