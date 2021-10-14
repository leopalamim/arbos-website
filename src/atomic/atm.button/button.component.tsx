import {
  ButtonContentStyled,
  ButtonSpinnerStyled,
  ButtonWrapperStyled,
  ButtonWrapperStyledProps
} from './button.component.style'
import { ActivityIndicator } from 'atomic/atm.activity-indicator/activity-indicator.component'
import { Hbox } from '@atomic/obj.hbox'
import React from 'react'
import { LinkStyled } from '@atomic/atm.typography'

interface ButtonProps extends ButtonWrapperStyledProps {
  href?: string
  onClick?: (param) => void
  type?: 'submit' | 'reset' | 'button'
  loading?: boolean
  target?: string
  disabled?: boolean
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { loading, ...other } = props

  if (props.href && !props.disabled) {
    return (
      <LinkStyled href={props.href} passHref>
        <ButtonWrapperStyled as={'a'} {...other}>
          <Hbox vAlign={'center'}>
            {React.Children.map(props.children, (child) => (
              <>
                {React.Children.count(props.children) > 1 && <Hbox.Separator />}
                <Hbox.Item vAlign={'center'} hAlign={'center'} noGrow>
                  {child}
                </Hbox.Item>
              </>
            ))}
          </Hbox>
        </ButtonWrapperStyled>
      </LinkStyled>
    )
  }

  return (
    <ButtonWrapperStyled {...other} disabled={props.disabled}>
      <ButtonContentStyled processing={loading}>
        <Hbox>
          {React.Children.map(props.children, (child) => (
            <>
              {React.Children.count(props.children) > 1 && <Hbox.Separator />}

              <Hbox.Item vAlign={'center'} hAlign={'center'} noGrow>
                {child}
              </Hbox.Item>
            </>
          ))}
        </Hbox>
      </ButtonContentStyled>
      <ButtonSpinnerStyled processing={loading}>
        <ActivityIndicator type={'spinner'} />
      </ButtonSpinnerStyled>
    </ButtonWrapperStyled>
  )
}

Button.defaultProps = {
  kind: 'primary',
  variant: 'solid',
  loading: false
}
