
// every react component have one  parameter which is called props(Properties)
import './style.css'
function MovieCard(props){
  return (
    <div className="card-container">
      <div className="card-header">
        <img src={props.imageUrl}/>
      </div>
      <div className="card-body">{props.title}</div>
      <div className="card-footer">
          <div className='content'>
            <span>
            Votes: {props.votes}
            </span>
            <span>
            Rating: {props.rating}
            </span>
          </div>
          <div>
           <img src= '/images/heart.png'/>
          </div>
      </div>
    </div>
  )
}


 export default  MovieCard;

