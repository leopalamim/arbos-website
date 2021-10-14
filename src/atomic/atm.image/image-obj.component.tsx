/* eslint-disable react/display-name */
import { Image } from './image.component'
import logoArbos from '@assets/img/img-logo.png'

export const ImageObj = {
  LogoArbos: () => <Image src={logoArbos} alt={'Logo da Arbos'} width={'50px'} height={'50px'} />,
}
