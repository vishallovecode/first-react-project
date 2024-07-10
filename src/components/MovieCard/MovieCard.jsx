
// every react component have one  parameter which is called props(Properties)
import './style.css'
function MovieCard(props){
  return (
    <div className="card-container">
      <div className="card-header">
        <img src={props.movie.imageUrl}/>
      </div>
      <div className="card-body">{props.movie.title}</div>
      <div className="card-footer">
          <div className='content'>
            <span>
            Votes: {props.movie.votes}
            </span>
            <span>
            Rating: {props.movie.rating}
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

