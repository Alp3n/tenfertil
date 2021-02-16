import React from "react"
import styled from "styled-components"
import myTheme from "../../styles/myTheme"
import LogoCss from "../logo/logo-css"
import { CgSmartphone, CgMail } from "react-icons/cg"

const StyledFooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
  padding: 3rem 0;
  background-color: ${myTheme.color["portrait-2"]};
  margin-top: 10%;
`

const StyledContect = styled.div`
  width: 50%;
`
const StyledInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledContactWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;
`
const StyledContactText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;
`
const StyledText = styled.p`
  margin: 0;
`

const FooterDesktop = ({ number, email, company }) => {
  return (
    <StyledFooterWrapper id="footer">
      <StyledContect>
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
              <StyledText size={myTheme.typography["text-p"]}>
                {email}
              </StyledText>
            </StyledContactText>
          </StyledContactWrapper>
          <StyledText size={myTheme.typography["text-p3"]}>
            {company}
          </StyledText>
        </StyledInfoWrapper>
        <StyledText>© {new Date().getFullYear()} Nhinstitute</StyledText>
      </StyledContect>
    </StyledFooterWrapper>
  )
}
export default FooterDesktop
