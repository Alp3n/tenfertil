import React from "react"

import CirclesMobile from "./circles-mobile"

const TipsMobile = ({ list }) => {
  return list.map(item => (
    <CirclesMobile
      key={item.header}
      header={item.header}
      image={item.image}
      text={item.text}
    />
  ))
}

export default TipsMobile
