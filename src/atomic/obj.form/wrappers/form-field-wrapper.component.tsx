import { ErrorMessage, InputCaption, Label } from 'atomic/atm.typography/typography'
import { Separator } from '@atomic/atm.separator/separator.style'
import { Hbox } from 'atomic/obj.hbox/hbox.component'
import React from 'react'
import { FormModel } from '@app/model/form.model'
import { FormIconStyled, FormWrapperStyled } from '@atomic/obj.form/form.component.style'
import { FaIcon } from '@atomic/atm.font-awesome'

interface FormWrapperProps extends FormModel {
  type: FormWrapperTypes
  question?: boolean
  openModal?: () => void
}

export enum FormWrapperTypes {
  text = 'text',
  select = 'select'
}

export const FormInputWrapper: React.FC<FormWrapperProps> = (props) => (
  <>
    {props.type === FormWrapperTypes.text && <Label htmlFor={props.name}>{props.label}</Label>}
    <Hbox>
      <Hbox.Item noGrow={props.type === FormWrapperTypes.select ? true : false} vAlign={'center'}>
        <FormWrapperStyled>
          {props.children}
          {props.question && (
            <FormIconStyled>
              <FaIcon.Question onClick={props.openModal} />
            </FormIconStyled>
          )}
        </FormWrapperStyled>
      </Hbox.Item>
      {props.type === FormWrapperTypes.select && (
        <Hbox.Item vAlign={'center'}>
          <Label htmlFor={props.id}>{props.label}</Label>
        </Hbox.Item>
      )}
    </Hbox>
    <InputCaption>{props.caption}</InputCaption>
    {props.error?.type == 'required' && <ErrorMessage>Este campo é obrigatório.</ErrorMessage>}
    {props.error?.type == 'minLength' && <ErrorMessage>O campo precisa ter no mínimo 6 caracteres.</ErrorMessage>}
    {props.error?.type == 'maxLength' && <ErrorMessage>O campo excede o tamanho máximo permitido.</ErrorMessage>}
    {props.error?.type == 'validate' && <ErrorMessage>As senhas precisam ser idênticas.</ErrorMessage>}
    <Separator type={'line'} />
  </>
)
