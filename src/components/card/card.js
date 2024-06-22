
import Button from '../../button';
import './card.css'

const Card = () => {
  return  (
    <div className="card">
      <div className="img-cont">
        <img src = 'https://st.adda247.com/https://storeimages.adda247.com/39371716365652.png?tr=w-undefined'/>
      </div>
      <div>
        <h2>Heading</h2>
        <span>This is short description about the card</span>
      </div>
      <Button/>
    </div>
  )
}


export default Card;