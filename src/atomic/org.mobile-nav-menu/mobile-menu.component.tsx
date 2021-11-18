import { MenuBox, MobileMenuHeader, MobileMenuWrapper } from './mobile-menu.component.style'
import { Hbox } from 'atomic/obj.hbox/hbox.component'
import { ImageObj } from 'atomic/atm.image/image-obj.component'
import { Button } from 'atomic/atm.button/button.component'
import { FaIcon, FaIconSize } from 'atomic/atm.font-awesome/font-awesome.component'
import { Routes } from 'app/modules/app/routes'
import { useRouter } from 'next/router'

interface MobileMenuProps {
  menuOpened: boolean
  toggleMenu: () => void
  isLogged?: boolean
}

export const MobileMenu: React.FC<MobileMenuProps> = (props) => {
  const router = useRouter()
  const handleRoute = (route) => {
    router.push(route)
    if (props.menuOpened) {
      props.toggleMenu()
    }
  }
  return (
    <MobileMenuWrapper isOpened={props.menuOpened} isLogged={props.isLogged}>
      <MobileMenuHeader isLogged={props.isLogged}>
        <Hbox>
          <Hbox.Item onClick={props.toggleMenu} vAlign={'center'}>
            {props.menuOpened ? <FaIcon.Close size={FaIconSize.medium} /> : <FaIcon.Menu size={FaIconSize.medium} />}
          </Hbox.Item>
          <Hbox.Item onClick={props.toggleMenu} vAlign={'center'} noGrow={true}>
            <Button kind={'link'}>Menu</Button>
          </Hbox.Item>
        </Hbox>
        <Hbox>
          <Hbox.Item onClick={() => handleRoute(Routes.Home)}>
            <ImageObj.LogoArbos />
          </Hbox.Item>
        </Hbox>
      </MobileMenuHeader>
      <MenuBox isOpened={props.menuOpened}>{props.children}</MenuBox>
    </MobileMenuWrapper>
  )
}
