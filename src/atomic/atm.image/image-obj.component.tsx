/* eslint-disable react/display-name */
import { Image } from './image.component'

import clockIcon from '@assets/img/ic-clock.png'
import lettuceIcon from '@assets/img/ic-lettuce.png'
import noChemicalIcon from '@assets/img/ic-no-chemical.png'
import worldIcon from '@assets/img/ic-world.png'

import lettuce from '@assets/img/img-lettuce.jpg'
import logoArbos from '@assets/img/img-logo.png'

export const ImageObj = {
  ClockIcon: () => <Image src={clockIcon} alt={'Relógio'} width={'50px'} height={'50px'} />,
  LettuceIcon: () => <Image src={lettuceIcon} alt={'Alface'} width={'50px'} height={'50px'} />,
  NoChemicalIcon: () => <Image src={noChemicalIcon} alt={'Sem químicos'} width={'50px'} height={'50px'} />,
  WorldIcon: () => <Image src={worldIcon} alt={'Planeta'} width={'50px'} height={'50px'} />,
  Lettuce: () => <Image src={lettuce} alt={'Alface hidropônica'} width={'620px'} height={'830px'} />,
  LogoArbos: () => <Image src={logoArbos} alt={'Logo da Arbos'} width={'50px'} height={'50px'} />,
}
