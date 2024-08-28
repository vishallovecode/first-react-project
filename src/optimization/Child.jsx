import { memo } from "react";

// prevProps  vs currentProps doen not equal re-render
const Child = memo(function (props) {
  console.log('Child Called')
  return  (
    <div>Hello</div>
  )
}
)
export default Child;