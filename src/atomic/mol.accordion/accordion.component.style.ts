import styled from 'styled-components'
import { Border, Color, Spacing } from 'atomic/obj.constants/constants'
import { AccordionItem, AccordionItemButton, AccordionItemHeading } from 'react-accessible-accordion'

export const AccordionItemButtonStyled = styled(AccordionItemButton)`
  transition: transform 0.3s;
  &: hover {
    transform: scale(1.01);
    cursor: pointer;
  }
`

export const AccordionItemStyled = styled(AccordionItem)`
  padding: ${Spacing.Medium};
`

export const AccordionItemHeadingStyled = styled(AccordionItemHeading)`
  border-bottom: ${Border.Width} solid ${Color.Gray};
`
