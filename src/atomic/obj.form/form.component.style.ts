import styled, { css } from 'styled-components'
import { Border, Color, ProportionalSpacing, Spacing } from 'atomic/obj.constants/constants'
import { InputValue } from 'atomic/atm.typography/typography'

export const inputCss = css`
  padding: ${Spacing.Small};
  background-color: ${Color.GrayXLight};
  border-radius: ${Border.Radius};
  border: 1px solid ${Color.GrayLight};
  outline: none;
`

export const Input = styled.input`
  ${inputCss}
  ${InputValue}
  &::placeholder {
    color: ${Color.Gray};
  }
  &[type='text'] {
    width: 100%;
  }
  &[type='password'] {
    width: 100%;
  }
  &[type='date'] {
    width: 100%;
  }
  &[type='number'] {
    width: 100%;
  }
  &[type='radio'] {
    margin-right: ${Spacing.XSmall};
  }
  &[type='checkbox'] {
    margin-right: ${Spacing.XSmall};
  }
  &[type='submit'] {
    display: none;
  }
  :focus {
    border-color: ${Color.Primary};
    box-shadow: inset 0 0 0 ${Border.Width} ${Color.Primary};
  }
  :disabled {
    background-color: ${Color.Gray};
  }
`

export const FormWrapperStyled = styled.div`
  position: relative;
`

export const FormIconStyled = styled.div`
  position: absolute;
  top: ${ProportionalSpacing.Large};
  right: ${ProportionalSpacing.XSmall};
  &:hover {
    cursor: pointer;
  }
`

export const Form = styled.form`
  text-align: left;
`

interface TextareaProps {
  largeField?: boolean
}

export const Textarea = styled.textarea`
  width: 100%;
  height: ${(props: TextareaProps) => (props.largeField ? Spacing.XXLarge : Spacing.XLarge)};
`

export const Datalist = styled.datalist``

export const Option = styled.option``
