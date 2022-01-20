import styled from 'styled-components'
import { Color, FontFamily, FontSize, FontWeight, LineHeight, Border, Spacing } from 'atomic/obj.constants/constants'

export type ButtonKind = 'primary' | 'secondary' | 'callToAction' | 'link' | 'neutral' | 'alert'

export interface ButtonWrapperStyledProps {
  expanded?: boolean
  outlined?: boolean
  kind?: ButtonKind
  variant?: 'solid' | 'outline' | 'link'
  disabled?: boolean
  type?: string
}

const buttonColor: Record<ButtonKind, { textColor: string; shapeColor: string }> = {
  primary: {
    textColor: Color.White,
    shapeColor: Color.Primary
  },
  secondary: {
    textColor: Color.Primary,
    shapeColor: 'transparent'
  },
  callToAction: {
    textColor: Color.White,
    shapeColor: Color.CallToAction
  },
  neutral: {
    textColor: Color.Black,
    shapeColor: Color.GrayLight
  },
  link: {
    textColor: Color.Primary,
    shapeColor: 'transparent'
  },
  alert: {
    textColor: Color.White,
    shapeColor: Color.Alert
  }
}

export const ButtonWrapperStyled = styled.button<ButtonWrapperStyledProps>`
  position: relative;
  font-weight: ${FontWeight.Medium};
  font-size: ${FontSize.Small};
  background-color: ${(props: ButtonWrapperStyledProps) => buttonColor[props.kind].shapeColor};
  color: ${(props: ButtonWrapperStyledProps) => buttonColor[props.kind].textColor};
  border-radius: ${Border.Radius};
  border: 1px solid
    ${(props: ButtonWrapperStyledProps) =>
      props.kind === 'secondary' ? buttonColor[props.kind].textColor : buttonColor[props.kind].shapeColor};
  font-family: ${FontFamily.Primary};
  cursor: pointer;
  display: inline-block;
  padding: ${Spacing.Small} ${Spacing.Large};
  text-decoration: none;
  text-align: center;

  &:focus {
    outline: 0;
  }
  &:hover {
    opacity: 0.8;
  }

  ${(props: ButtonWrapperStyledProps) => props.expanded && 'width: 100%;'}
  ${(props: ButtonWrapperStyledProps) => {
    switch (props.variant) {
      case 'outline':
        return `
          background-color: transparent;
          color: ${buttonColor[props.kind].shapeColor};
        `
      case 'link':
        return `
          padding: 0;
          border: 0;
          background-color: transparent;
          color: ${buttonColor[props.kind].shapeColor};
          text-align: left;
        `
    }
  }}

  ${(props: ButtonWrapperStyledProps) =>
    props.disabled &&
    `
      opacity: 0.7;
    `}
  
  ${(props: ButtonWrapperStyledProps) =>
    props.kind === 'link' &&
    `
    font-weight: ${FontWeight.Regular};
    `}
`

interface ButtonContentProps {
  processing: boolean
}

export const ButtonContentStyled = styled.div<ButtonContentProps>`
  transition: all 0.2s ease-in-out;
  opacity: ${(props) => (props.processing ? 0 : 1)};
  font-stretch: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  & .fa,
  & img,
  & svg {
    width: auto !important;
    padding-right: ${Spacing.XSmall};
    vertical-align: inherit;
  }
`

export const ButtonSpinnerStyled = styled.span<ButtonContentProps>`
  display: ${(props) => (props.processing ? 'inline-block' : 'none')} !important;
  position: absolute;
  right: calc(50% - 8px);
  top: calc(50% - 10px);
`
export const LinkButtonStyled = styled.button.attrs({ type: 'button' })`
  background: none;
  border: none;
  color: ${Color.Primary};
  font-family: ${FontFamily.Secondary};
  font-size: ${FontSize.Small};
  font-weight: ${FontWeight.Regular};
  line-height: ${LineHeight.Medium};
  cursor: pointer;
`
