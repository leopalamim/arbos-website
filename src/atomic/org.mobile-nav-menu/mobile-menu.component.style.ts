import styled from 'styled-components'
import { Breakpoint, Color, HeaderMenuHeight, Shadow, Spacing, ZIndex } from 'atomic/obj.constants/constants'
import { Body } from '@atomic/atm.typography'

interface MenuMobileProps {
  isOpened?: boolean
  height?: number
  isLogged?: boolean
}

export const MenuBox = styled.div<MenuMobileProps>`
  transition: 0.5s;
  padding: 0 ${Spacing.Large};
  z-index: 2;
  width: 100vw;
  transition: 0.25s;
  -webkit-overflow-scrolling: touch;
  height: ${(props) => (props.isOpened ? '80vh' : '0px')};

  & img {
    height: 40px;
  }

  @media (min-width: ${Breakpoint.Desktop}) {
    display: none;
  }
`

export const MobileMenuHeader = styled.div<MenuMobileProps>`
  position: sticky;
  top: 0;
  background-color: ${({ isLogged }) => (isLogged ? Color.GreenXLight : Color.White)};
  z-index: ${ZIndex.First};
  display: flex;
  padding: ${Spacing.Small};
  justify-content: space-between;
  height: ${HeaderMenuHeight};
  & img {
    height: 40px;
  }
`

export const MobileMenuWrapper = styled.div<MenuMobileProps>`
  position: fixed;
  top: 0;
  right: 0;
  background-color: white;
  width: 100%;
  transition: 0.5s;
  z-index: ${ZIndex.Top};
  background-color: ${({ isLogged }) => (isLogged ? Color.GreenXLight : Color.White)};
  height: ${(props) => (props.isOpened ? '100vh' : HeaderMenuHeight)};
  box-shadow: ${Shadow};
  overflow: auto;
  -webkit-overflow-scrolling: touch;

  @media (min-width: ${Breakpoint.Desktop}) {
    display: none;
  }
`
