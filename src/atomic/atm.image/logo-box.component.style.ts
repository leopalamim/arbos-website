import { Spacing } from '@atomic/obj.constants'
import styled from 'styled-components'

export const LogoImageStyled = styled.img`
  max-width: 100%;
  max-height: 80px;
`

export const LogoBoxStyled = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  filter: saturate(0);
  transition: all 0.4s ease;
  padding: ${Spacing.Medium};
  &:hover {
    filter: saturate(1);
    transform: scale(1.1);
  }
`
