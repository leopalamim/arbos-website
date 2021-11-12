import ColorFunc from 'color'
import styled from 'styled-components'

import { Border, Color, Spacing, ZIndex } from 'atomic/obj.constants/constants'
import { highlightStyle } from 'atomic/obj.mixin/mixin.component.style'

import { FlashMessageProps } from './flash-message.component'

const flashMessageTypes = {
  warning: Color.Warning,
  success: Color.Success,
  info: Color.Accessory,
  alert: Color.Alert
}

export const FlashMessageContentStyled = styled.div`
  flex-grow: 1;
  margin: 0 ${Spacing.Small};
`

export const FlashMessageCloseStyled = styled.div<FlashMessageProps>`
  ${highlightStyle}
  &:hover > span {
    color: ${(props) => ColorFunc(flashMessageTypes[props.type]).darken(0.5).string()};
  }
`

export const FlashMessageStyled = styled.div<FlashMessageProps>`
  background-color: ${(props) => ColorFunc(flashMessageTypes[props.type]).lighten(0.5).string()};
  border-radius: ${Border.Radius};
  display: flex;
  padding: ${Spacing.Medium};
  transition: opacity 0.3s ease-in-out;
  p,
  svg {
    color: ${(props) => ColorFunc(flashMessageTypes[props.type]).darken(0.3).string()};
  }
`

export const FlashMessageWrapper = styled.div`
  position: fixed;
  bottom: 10px;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: ${ZIndex.Top};
`
