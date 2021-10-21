import { FaIcon } from '@atomic/atm.font-awesome'
import { Separator } from '@atomic/atm.separator'
import { Hbox } from '@atomic/obj.hbox'
import { H3 } from '@atomic/atm.typography'
import React from 'react'
import { AccordionItemPanel, AccordionItemState } from 'react-accessible-accordion'
import { Accordion as AccordionLib } from 'react-accessible-accordion'

import { AccordionItemButtonStyled, AccordionItemHeadingStyled, AccordionItemStyled } from '.'

interface AccordionProps {
  title: string
}

export const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  return (
    <AccordionLib allowZeroExpanded>
      <AccordionItemStyled>
        <AccordionItemHeadingStyled>
          <AccordionItemButtonStyled>
            <Hbox>
              <Hbox.Item vAlign={'center'} noGrow>
                <H3>{title}</H3>
              </Hbox.Item>
              <Hbox.Separator />
              <Hbox.Item vAlign={'center'} hAlign={'end'}>
                <AccordionItemState>
                  {({ expanded }) =>
                    expanded ? (
                      <FaIcon.Minus color={'primary'} size={'2x'} />
                    ) : (
                      <FaIcon.Plus color={'primary'} size={'2x'} />
                    )
                  }
                </AccordionItemState>
              </Hbox.Item>
            </Hbox>
          </AccordionItemButtonStyled>
        </AccordionItemHeadingStyled>
        <Separator type={'line'} />
        {React.Children.map(children, (child) => (
          <AccordionItemPanel>{child}</AccordionItemPanel>
        ))}
      </AccordionItemStyled>
    </AccordionLib>
  )
}
