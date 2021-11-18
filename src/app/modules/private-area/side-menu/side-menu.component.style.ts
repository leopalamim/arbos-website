import styled from 'styled-components'
import { Breakpoint, Color, Spacing, ZIndex } from 'atomic/obj.constants/constants'
import { Body, H3 } from 'atomic/atm.typography/typography'

interface MenuMobileProps {
  isOpened?: boolean
}

export const SideMenuBox = styled.div<MenuMobileProps>`
  position: sticky;
  top: 0;
  background-color: ${Color.GreenXLight};
  height: 0;
  z-index: ${ZIndex.Second};
  width: 100%;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;

  @media (min-width: ${Breakpoint.Desktop}) {
    height: 100vh;
  }
`

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`
