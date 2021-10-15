/* eslint-disable react/display-name */
import { Image } from './image.component'
import icInstagram from 'assets/img/ic-instagram.png'
import icLinkedin from 'assets/img/ic-linkedin.png'
import icLocation from 'assets/img/ic-location.png'
import icMail from 'assets/img/ic-mail.png'
import icPhone from 'assets/img/ic-phone.png'

export const ImageIcon = {
  Instagram: () => <Image priority={true} src={icInstagram} alt={'Instagram icon'} width={'40px'} height={'40px'} />,
  Linkedin: () => <Image priority={true} src={icLinkedin} alt={'Linkedin icon'} width={'40px'} height={'40px'} />,
  Location: () => <Image priority={true} src={icLocation} alt={'Location icon'} width={'24px'} height={'24px'} />,
  Mail: () => <Image priority={true} src={icMail} alt={'Mail icon'} width={'24px'} height={'24px'} />,
  Phone: () => <Image priority={true} src={icPhone} alt={'Phone icon'} width={'24px'} height={'24px'} />,
}
