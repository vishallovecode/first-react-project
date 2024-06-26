import Button from "../button";

function CustomCard(props) {
  const {img ,description , heading} = props;
  return  (
  <div className="card">
    <div className="img-cont">
      <img src = {img}/>
    </div>
    <div>
      <h2>{heading}</h2>
     <span>{description}</span> 
     </div>
     <Button buttonText="Continue"/>
  </div>
  )
}

export default CustomCard;