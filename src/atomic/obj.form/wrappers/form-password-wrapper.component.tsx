import { FormIconStyled, FormWrapperStyled } from '../form.component.style'
import { FontAwesomeStyled } from 'atomic/atm.font-awesome/font-awesome.component.style'
import { faEye } from '@fortawesome/free-solid-svg-icons'

interface PasswordWrapperProps {
  showPassword: () => void
}

export const PasswordWrapper: React.FC<PasswordWrapperProps> = (props) => (
  <FormWrapperStyled>
    {props.children}
    <FormIconStyled>
      <FontAwesomeStyled icon={faEye} onClick={props.showPassword} />
    </FormIconStyled>
  </FormWrapperStyled>
)
