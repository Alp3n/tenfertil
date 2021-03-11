import React from "react"
import styled from "styled-components"
import List from "../list/list"
import { online, offline } from "../../content/data/apteki"
import myTheme from "../../styles/myTheme"

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  margin-top: 3rem;
`

const StyledWrapperBreaker = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
  height: auto;
  padding: 5rem 0;
  background-color: ${myTheme.color.background};
  white-space: pre-wrap;
  margin: 2rem 0;
`

const Styled50 = styled.div`
  width: 55%;
`
const StyledH1 = styled.h1`
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 36px;
`
const StyledH2 = styled.h2`
  font-size: 30px;
`

const BuyDesktop = ({ isVN }) => {
  return (
    <StyledWrapper>
      <StyledWrapperBreaker>
        <Styled50>
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
              ? "Thực phẩm bổ sung của chúng tôi có thể được\ntìm thấy trực tuyến và tại các hiệu thuốc văn phòng phẩm"
              : "Nasz suplement diety można znaleźć online\njak i w aptekach stacjonarnych"}
          </StyledH2>
        </Styled50>
      </StyledWrapperBreaker>
      <Styled50>
        <StyledH1>On-Line:</StyledH1>
        <List isVN={isVN} list={online} online />
      </Styled50>
      <Styled50>
        <StyledH1>{isVN ? "Dứng im:" : "Stacjonarnie:"}</StyledH1>
        <List list={offline} offline />
      </Styled50>
    </StyledWrapper>
  )
}

export default BuyDesktop
