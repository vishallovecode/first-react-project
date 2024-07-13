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