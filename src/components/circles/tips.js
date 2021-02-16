import React from "react"
import styled from "styled-components"
import Circles from "./circles"
import myTheme from "../../styles/myTheme"

const StyledWrapper = styled.div`
  padding-left: 3rem;
  border-left: 1px solid ${myTheme.color.button};
`

const Tips = ({ list }) => {
  return (
    <StyledWrapper>
      {list.map(item => (
        <Circles
          key={item.header}
          header={item.header}
          image={item.image}
          text={item.text}
        />
      ))}
    </StyledWrapper>
  )
}

export default Tips
