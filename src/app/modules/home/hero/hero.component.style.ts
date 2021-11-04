import styled from 'styled-components'
import { Color, Breakpoint } from 'atomic/obj.constants/constants'
import { Grid } from 'atomic/obj.grid/grid'
import heroImage from 'assets/img/img-hero.png'
import heroImageMobile from 'assets/img/img-hero-mobile.jpg'
import { Body } from 'atomic/atm.typography/typography'

export const HeroStyled = styled.div`
  margin-top: 0px;
  height: 100vh;
  background: ${Color.White} url(${heroImage}) center center no-repeat;
  background-size: cover;
  & ${Body} {
    color: ${Color.White};
  }

  @media (max-width: ${Breakpoint.Mobile}) {
    background: ${Color.White} url(${heroImageMobile}) center center no-repeat;
    background-size: cover;
  }
`

export const HeroGridStyled = styled(Grid)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
`

export const StrongWordBoxStyled = styled.div`
  color: ${Color.Secondary};
  min-height: 6rem;
  width: 100%;
`
