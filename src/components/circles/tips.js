import React from "react"
import Circles from "./circles"

const Tips = ({ list }) => {
  return list.map(item => (
    <Circles
      key={item.header}
      header={item.header}
      image={item.image}
      text={item.text}
    />
  ))
}

export default Tips
