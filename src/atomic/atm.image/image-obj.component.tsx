/* eslint-disable react/display-name */
import { Image } from './image.component'

import clockIcon from '@assets/img/ic-clock.png'
import lettuceIcon from '@assets/img/ic-lettuce.png'
import noChemicalIcon from '@assets/img/ic-no-chemical.png'
import worldIcon from '@assets/img/ic-world.png'

import hub from '@assets/img/img-hub.jpg'
import leaf from '@assets/img/img-leaf.png'
import lettuce from '@assets/img/img-lettuce.png'
import logoArbos from '@assets/img/img-logo.png'

export const ImageObj = {
  ClockIcon: () => <Image src={clockIcon} alt={'Relógio'} width={'50px'} height={'50px'} />,
  LettuceIcon: () => <Image src={lettuceIcon} alt={'Alface'} width={'50px'} height={'50px'} />,
  NoChemicalIcon: () => <Image src={noChemicalIcon} alt={'Sem químicos'} width={'50px'} height={'50px'} />,
  WorldIcon: () => <Image src={worldIcon} alt={'Planeta'} width={'50px'} height={'50px'} />,
  Hub: () => <Image src={hub} alt={'Hub'} width={'360px'} height={'542px'} />,
  Leaf: () => <Image src={leaf} alt={'Folha'} width={'106px'} height={'150px'} />,
  Lettuce: () => <Image src={lettuce} alt={'Alface'} width={'300px'} height={'300px'} />,
  LogoArbos: () => <Image src={logoArbos} alt={'Logo da Arbos'} width={'70px'} height={'70px'} />,
}
