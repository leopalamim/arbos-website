import styled from 'styled-components'
import { Color, ZIndex, Spacing, Breakpoint, Shadow, HeaderMenuHeight } from 'atomic/obj.constants/constants'

export const HeaderMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: ${ZIndex.First};
  height: ${HeaderMenuHeight};
  & img {
    height: 40px;
  }
`

interface MenuProps {
  height: number
}

export const HeaderMenuWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: ${ZIndex.Top};
  padding: 0 ${Spacing.Large};
  background-color: ${Color.White};
  box-shadow: ${Shadow};
  height: 64px;
  &: hover {
    height: ${(props: MenuProps) => props.height}px;
  }
  transition: 0.2s;
  overflow: hidden;

  @media (max-width: ${Breakpoint.Desktop}) {
    display: none;
  }
`
