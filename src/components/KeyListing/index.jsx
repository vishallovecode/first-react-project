import { useState } from "react";

// noprotect
function Item (props) {
  return (
      <div className="form-group">
        <label className="col-xs-4 control-label">{props.name}</label>
        <div className="col-xs-8">
          <input type='text' className='form-control' />
        </div>
      </div>
    )
}

function ExampleKeys () {
    const [list , setList] = useState([ {name: 'Foo1444610101010', id: 1444610101010},
    {name: 'Bar1444600000000', id: 1444600000000} ])

  function userInput() {
    const firstItems = Array.from(document.querySelectorAll('.form-group:first-child input'));
    firstItems.forEach((item) => item.value = 'It is ' + (new Date()).toTimeString())
  }
  
  function addItem() {
    const id = +new Date;
    let updatedList = [...list]; // deep copy
    // updatedList.unshift( {name: 'Baz' + id, id}) // first index
    // updatedList = [{name: 'Baz' + id, id} , ...list] // first index push
    updatedList.push({name: 'Baz' + id, id} ) // last push
    setList(updatedList);

  }
  
function removeItem(index) {
  let updatedList = [...list]; // deep copy
  // updatedList.unshift( {name: 'Baz' + id, id}) // this is adding item to the 0 index
  updatedList.shift() // removing item from first
  // updatedList.pop() // removing item from last
  setList(updatedList);
}
    return (
      <div style={{margin:'auto'}}>
        <b>How to use: </b>
        First write something in the inputs
        (or <a href='#' onClick={userInput}>simulate it</a>).
        Then hit <em>Add item</em> and see what happens…
        <hr/>
        <button className='btn btn-primary' onClick={addItem}><b>Add item</b> to the beginning of the list</button>
        <button className='btn btn-primary' onClick={removeItem}><b>Remove item</b></button>

      

        <h3>Dangerous <code>key=index</code></h3>
        <form className="form-horizontal">
            {list.map((todo, index) =>
              <Item {...todo}
              key={index} />
            )}
        </form>
        

        <h3>Better <code>key=id</code></h3>
        <form className="form-horizontal">
            {list.map((todo) =>
              <Item {...todo}
              key={todo.id} />
            )}
        </form>
        
        
        <hr/>
        <a href='https://medium.com/p/e0349aece318'>&laquo; Back to the article</a>.
      </div>
    )

}


export default ExampleKeys;




// props 


const B =(props)=>{
  console.log(props) // {data: [1,2,3]}  // props.data => [1,2,3]
  return (
    <div>
      {'Hello'}
    </div>
  )
}

const A =() => {
  return  (
    <B  data = {[1,2,3]}/>
  )
}


// Re-usable component that is basically use for re-using again and again 
<Button/>


// [Hello] => Home
//  [Submit] => Product listing
//    [Continue] => Cart
//    [css should be diff]
//     // clicking on the button we want different action 


// You arer creating one compopent and using this again and again for dirrenet scenario 



