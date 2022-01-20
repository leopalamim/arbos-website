import styled, { css } from 'styled-components'

import Link from 'next/link'

import {
  Color,
  FontFamily,
  FontSize,
  FontWeight,
  LineHeight,
  Spacing,
  Transition
} from 'atomic/obj.constants/constants'

export const DisplayStyled = styled.h1`
  width: 100%;
  font-family: ${FontFamily.Primary};
  font-size: ${FontSize.XXLarge};
  line-height: ${LineHeight.XLarge};
  font-weight: ${FontWeight.Regular};
  color: ${Color.Black};
`

export const Subheading = styled.p`
  font-family: ${FontFamily.Secondary};
  font-size: ${FontSize.Medium};
  font-weight: ${FontWeight.Regular};
  line-height: ${LineHeight.Medium};
  color: ${Color.GrayDark};
`

export const overflowTextCss = `
width: 100%;
text-overflow: ellipsis;
overflow: hidden;
display: -webkit-box;
-webkit-line-clamp: 3;
-webkit-box-orient: vertical;`

export const TitleLink = styled.a`
  font-size: ${FontSize.Medium};
  line-height: ${LineHeight.Medium};
  font-weight: ${FontWeight.Medium};

  ${overflowTextCss}
  color: ${Color.Black};
  cursor: pointer;
  &: hover {
    color: ${Color.Primary};
  }
`

export const H1 = styled.h1`
  position: relative;
  right: 30px;
  z-index: 1;
  font-family: ${FontFamily.Primary};
  font-size: ${FontSize.XLarge};
  line-height: ${LineHeight.Large};
  font-weight: ${FontWeight.Bold};
  color: ${Color.Black};
`

export const H2 = styled.h2`
  font-family: ${FontFamily.Primary};
  font-size: ${FontSize.Large};
  line-height: ${LineHeight.Large};
  font-weight: ${FontWeight.Bold};
  color: ${Color.Black};
  font-size: ${FontSize.Large};
  margin: ${Spacing.Large} 0 ${Spacing.Medium};
`

interface H3Props {
  hideOverflow?: boolean
}
export const H3 = styled.h3<H3Props>`
  font-family: ${FontFamily.Primary};
  font-size: ${FontSize.Medium};
  line-height: ${LineHeight.Medium};
  font-weight: ${FontWeight.Medium};
  margin: ${Spacing.Medium} 0 ${Spacing.Small};
  color: ${Color.Black};
  ${({ hideOverflow }) => hideOverflow && overflowTextCss}
`

export const H4 = styled.h4`
  font-family: ${FontFamily.Primary};
  font-size: ${FontSize.Small};
  line-height: ${LineHeight.Small};
  font-weight: ${FontWeight.Medium};
  margin: ${Spacing.Medium} 0 ${Spacing.Small};
  color: ${Color.Black};
`
interface BodyProps {
  hideOverflow?: boolean
}

export const Body = styled.p<BodyProps>`
  font-family: ${FontFamily.Secondary};
  font-size: ${FontSize.Small};
  font-weight: ${FontWeight.Regular};
  line-height: ${LineHeight.Medium};
  color: ${Color.GrayDark};
`

const linkStyledWidth = 200

interface LinkStyledProps {
  fixedSize?: boolean
}
// Next's link component is a wrapper rather than a text, therefore we should style the text inside of it, rather than Link itself
export const LinkStyled = styled(Link)<LinkStyledProps>`
  width: ${({ fixedSize }) => (fixedSize ? `${linkStyledWidth}px` : '')};
  > ${Body} {
    font-family: ${FontFamily.Primary};
    color: inherit;
    transition: color ${Transition.Fast};
    color: ${Color.Primary};
    &:hover {
      cursor: pointer;
    }
    display: inline;
  }
`
interface BodySecondaryProps {
  align?: string
}

export const DateTextStyled = styled(Body)`
  color: ${Color.Accessory};
`

export const BodySecondary = styled.p`
  font-family: ${FontFamily.Secondary};
  font-size: ${FontSize.XXSmall};
  font-weight: ${FontWeight.Regular};
  color: ${Color.Black};
  text-align: ${(props: BodySecondaryProps) => props.align || 'left'};
  display: inline;
  word-break: break-word;
`

export const ErrorMessage = styled(BodySecondary)`
  color: ${Color.Alert};
`

export const Label = styled.label`
  font-family: ${FontFamily.Secondary};
  font-size: ${FontSize.XSmall};
  font-weight: ${FontWeight.Regular};
  color: ${Color.GrayXDark};
  &:hover {
    cursor: pointer;
  }
`

export const InputValue = css`
  font-family: ${FontFamily.Secondary};
  font-size: ${FontSize.Small};
  font-weight: ${FontWeight.Regular};
  color: ${Color.GrayDark};
`

export const InputCaption = styled.p`
  font-family: ${FontFamily.Secondary};
  font-size: ${FontSize.XXSmall};
  font-weight: ${FontWeight.Regular};
  color: ${Color.GrayDark};
`

export const Quote = styled.span`
  color: ${Color.Black};
`

export const Enhance = styled.span`
  color: ${Color.Primary};
  font-weight: ${FontWeight.Bold};
`

export const Bold = styled.span`
  color: ${Color.Black};
  font-weight: ${FontWeight.Bold};
`

export const Italic = styled.span`
  font-style: italic;
`

export const Stats = styled.label`
  font-family: ${FontFamily.Primary};
  font-size: ${FontSize.Large};
  line-height: ${LineHeight.Large};
  font-weight: ${FontWeight.Bold};
  color: ${Color.Primary};
  background-color: transparent;
`
export const DL = styled.dl`
  display: grid;
  grid-template-columns: 0.1fr 1fr;
  font-family: ${FontFamily.Secondary};
  gap: ${Spacing.XSmall} ${Spacing.Small};
`
export const DT = styled.dt`
  font-family: ${FontFamily.Secondary};
  font-size: ${FontSize.Small};
  color: ${Color.Black};
  font-weight: ${FontWeight.Bold};
`
export const DD = styled.dd`
  font-family: ${FontFamily.Secondary};
  font-size: ${FontSize.XSmall};
  font-weight: ${FontWeight.Lighter};
  line-height: ${LineHeight.Medium};
  color: ${Color.GrayDark};
`

export const RichHTMLStyled = styled.div`
  & p {
    font-family: ${FontFamily.Secondary};
    font-size: ${FontSize.Small};
    font-weight: ${FontWeight.Regular};
    line-height: ${LineHeight.Medium};
    color: ${Color.GrayDark};
  }
  & h3 {
    font-family: ${FontFamily.Primary};
    font-size: ${FontSize.Medium};
    line-height: ${LineHeight.Medium};
    font-weight: ${FontWeight.Medium};
    margin: ${Spacing.Medium} 0 ${Spacing.Small};
    color: ${Color.Black};
  }
`
