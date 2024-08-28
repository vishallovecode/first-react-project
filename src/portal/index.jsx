
import ReactDOM from 'react-dom';
function Modal  () {
  return  ReactDOM.createPortal(
  <div style={{backgroundColor:'red', width:'300px'}}>
    body
  </div> , 
  document.getElementById('portal-container')) 
}
export default Modal