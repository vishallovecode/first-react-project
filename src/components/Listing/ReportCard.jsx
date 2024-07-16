function ReportCard(props) {
   const {name , text , classes}= props
  return (
   <div className={`report-card ${classes}`}>
      <span>{name}</span>
      <span>{text}</span>
  </div>
  )
}


export default ReportCard;


// function Input (props) {
//     const  {type , handleSearch , placeHolder , classes} = props;
//     return  (
//       <input type={type} onChange={handleSearch} placeholder={placeHolder} className={`input  ${classes}`}
//     )
// };