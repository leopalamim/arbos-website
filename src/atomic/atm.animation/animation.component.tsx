import styled, { keyframes } from 'styled-components'
import { TransitionDuration } from 'atomic/obj.constants/constants'

export const FadeBottom = keyframes`
  from {
    transform: TranslateY(100px);
  }

  to {
    transform: TranslateY(0);
  }
`

export const FadeTop = keyframes`
  from {
    transform: TranslateY(-100px);
  }

  to {
    transform: TranslateY(0);
  }
`
export const FadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const FadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`

export const FadeDirection = {
  bottom: FadeBottom,
  top: FadeTop
}

export const Reveal = keyframes`
  from {
    opacity: 0;
  }

  to {
    transform: 100%;
  }
`

interface FadeImageProps {
  direction: 'bottom' | 'left' | 'right' | 'top'
}

export const FadeImageBoxStyled = styled.div<FadeImageProps>`
  position: absolute;
  bottom: -40px;
  top: 0;
  left: 0;
  right: 0px;
  display: inline-block;
  animation: ${(props) => (props.direction ? FadeDirection[props.direction] : FadeTop)} 1s ease;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`

interface FadeProps {
  show: boolean
}

export const Fade = styled.div<FadeProps>`
  border: 1px solid transparent;
  animation: ${(props) => (props.show ? FadeIn : FadeOut)} ${TransitionDuration} linear forwards;
`
