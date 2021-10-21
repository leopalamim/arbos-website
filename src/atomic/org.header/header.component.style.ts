import styled from 'styled-components'
import { Color, ZIndex, Spacing, Breakpoint, Shadow } from 'atomic/obj.constants/constants'

export const HeaderMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: ${ZIndex.First};
  height: 70px;
  & img {
    height: 60px;
  }
`

export const HeaderMenuWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: ${ZIndex.Top};
  padding: 0 ${Spacing.Large};
  background-color: ${Color.White};
  box-shadow: ${Shadow};
  height: 70px;
  overflow: hidden;

  @media (max-width: ${Breakpoint.Desktop}) {
    display: none;
  }
`
