import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Color } from 'atomic/obj.constants/constants'
import { SizeProp } from '@fortawesome/fontawesome-svg-core'

export enum FontAwesomeColor {
  Primary = 'primary',
  White = 'white',
  Inherit = 'inherit',
  Acessory = 'acessory',
  Success = 'success'
}

export interface FontAwesomeProps {
  color?: 'primary' | 'white' | 'inherit' | 'acessory' | 'success'
  size?: SizeProp
  onClick?: () => void
}

type IconColor = {
  [key in FontAwesomeColor]: {
    color: string
  }
}

const iconColor: IconColor = {
  [FontAwesomeColor.Primary]: {
    color: Color.Primary
  },
  [FontAwesomeColor.White]: {
    color: Color.White
  },
  [FontAwesomeColor.Inherit]: {
    color: 'inherit'
  },
  [FontAwesomeColor.Acessory]: {
    color: Color.Accessory
  },
  [FontAwesomeColor.Success]: {
    color: Color.Success
  }
}

export const FontAwesomeStyled = styled(FontAwesomeIcon)`
  color: ${(props: FontAwesomeProps) => (props.color ? iconColor[props?.color]?.color : Color.Primary)};
`
