import React from "react"
import styled from "styled-components"
import myTheme from "../../styles/myTheme"
import LogoCss from "../logo/logo-css"
import { CgSmartphone, CgMail, CgArrowUp } from "react-icons/cg"
import { Link } from "gatsby"

const StyledFooterWrapper = styled.footer`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 2rem 0;
  background-color: ${myTheme.color["portrait-2"]};
`

const StyledInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* margin: 0 auto; */
`

const StyledContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  margin: 1rem;
`
const StyledContactText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const StyledText = styled.p`
  font-size: 0.8rem;
  text-align: center;
  margin: 0;
  padding: 0 1rem;
`

const StyledLink = styled(Link)`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 0;
  bottom: 0;
  width: 64px;
  height: 64px;
  background-color: ${myTheme.color.button};
  text-decoration: none;
`

const FooterMobile = ({ number, email, company }) => {
  return (
    <StyledFooterWrapper id="footer">
      <LogoCss companyName={`Nutrition Health Institute`} />
      <StyledInfoWrapper>
        <StyledContactWrapper>
          <StyledContactText>
            <CgSmartphone color={myTheme.color["blue-4"]} size="24px" />
            <StyledText size={myTheme.typography["text-p"]}>
              {number}
            </StyledText>
          </StyledContactText>
          <StyledContactText>
            <CgMail color={myTheme.color["blue-4"]} size="24px" />
            <StyledText size={myTheme.typography["text-p"]}>{email}</StyledText>
          </StyledContactText>
        </StyledContactWrapper>
        <StyledText size={myTheme.typography["text-p3"]}>{company}</StyledText>
      </StyledInfoWrapper>
      <StyledText>© {new Date().getFullYear()} Nhinstitute</StyledText>
      <StyledLink to={`/`}>
        <CgArrowUp size={`34px`} color={`white`} />
      </StyledLink>
    </StyledFooterWrapper>
  )
}
export default FooterMobile
