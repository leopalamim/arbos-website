import { Button } from '@atomic/atm.button'
import { Separator } from '@atomic/atm.separator'
import { H3 } from '@atomic/atm.typography'
import React from 'react'

interface HeaderLinksProps {
  sectionTitle: string
  buttonObject: HeaderButtonProps[]
  handleRoute: (route: string) => void
}

interface HeaderButtonProps {
  name: string
  route: string
}

export const HeaderLinkSection: React.FC<HeaderLinksProps> = ({ sectionTitle, buttonObject, handleRoute }) => {
  return (
    <>
      <H3>{sectionTitle}</H3>
      {buttonObject.map((button) => (
        <React.Fragment key={button.name}>
          <Button kind={'primary'} variant={'link'} onClick={() => handleRoute(button.route)}>
            {button.name}
          </Button>
          <Separator type={'line'} />
        </React.Fragment>
      ))}
    </>
  )
}
