import { Body } from 'atomic/atm.typography/typography'
import { useFlashMessage } from 'app/modules/components/flash-message.hook'
import { FlashMessage, FlashMessageWrapper } from 'atomic/mol.flash-message'

export const FlashWrapper: React.FunctionComponent = () => {
  const { hide, data } = useFlashMessage()
  return !data.hidden && data.content ? (
    <FlashMessageWrapper>
      <FlashMessage
        type={data.type}
        onClose={hide}
        dismissible={data.dismissible != 'undismissible'}
        autoClose={data.autoClose != 'permanent'}
      >
        <Body> {data.content} </Body>
      </FlashMessage>
    </FlashMessageWrapper>
  ) : null
}
