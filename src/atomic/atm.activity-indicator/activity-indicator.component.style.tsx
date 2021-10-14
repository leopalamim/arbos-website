import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Color } from 'atomic/obj.constants/constants'

interface ActivityIndicatorStyledProps {
  light?: boolean
}

export const ActivityIndicatorStyled = styled(FontAwesomeIcon)<ActivityIndicatorStyledProps>`
  ${(props) => props.light && `color: ${props.light ? Color.White : Color.Primary}`};
  display: inline-block;
`
