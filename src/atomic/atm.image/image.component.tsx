import styled, { css } from 'styled-components'
import NextImage, { ImageProps as NextImageProps } from 'next/image'
import { Radius } from '../obj.constants/constants'

interface ImageProps {
  round?: boolean
  isEvent?: boolean
}
type ImageStyledProps = ImageProps & NextImageProps

const avatarImageStyle = css`
  border-radius: 50%;
`
const eventImageStyle = css`
  border-radius: ${Radius.Large};
`

export const Image = styled(NextImage)<ImageStyledProps>`
  ${({ round }) => round && avatarImageStyle};
  ${({ isEvent }) => isEvent && eventImageStyle};
`
