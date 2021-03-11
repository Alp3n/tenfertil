import React from "react"
import styled from "styled-components"
import List from "../list/list"
import { online, offline } from "../../content/data/apteki"
import Product from "../product/product"
import Button from "../button/button"
import myTheme from "../../styles/myTheme"

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 3rem 0;
`

const StyledWrapperBreaker = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin: 2rem 0;
  padding: 3rem 0;
  background-color: ${myTheme.color.background};
  white-space: pre-wrap;
  padding: 1.5rem;
`

const StyledMargin = styled.div`
  width: 90%;
  margin: 0 auto;
`
const StyledH1 = styled.h1`
  font-size: 28px;
  font-weight: 700;
  margin: 2rem 0;
`

const StyledH2 = styled.h2`
  font-size: 20px;
  margin-bottom: 1.45rem;
`

const BuyMobile = ({ isVN }) => {
  return (
    <StyledWrapper>
      <Product width={`300px`} buttonOff />
      <StyledWrapperBreaker>
        <StyledH1>
          {isVN ? (
            <>
              Tìm kiếm chỗ bán TENfertil<sup>&reg;</sup>ON?
            </>
          ) : (
            <>
              Gdzie kupić TENfertil<sup>&reg;</sup>ON?
            </>
          )}
        </StyledH1>
        <StyledH2>
          {isVN
            ? "Thực phẩm bổ sung của chúng tôi có thể được tìm thấy trực tuyến và tại các hiệu thuốc văn phòng phẩm"
            : "Nasz suplement diety można znaleźć online\njak i w aptekach stacjonarnych"}
        </StyledH2>
      </StyledWrapperBreaker>
      <StyledMargin>
        <StyledH1>On-Line:</StyledH1>
        <List isVN={isVN} list={online} online />

        <StyledH1>{isVN ? "Dứng im:" : "Stacjonarnie:"}</StyledH1>
        <List list={offline} offline />
      </StyledMargin>

      <Button to={isVN ? "/vn" : "/"} label={isVN ? "QUAY LẠI" : "WRÓĆ"} />
    </StyledWrapper>
  )
}

export default BuyMobile
