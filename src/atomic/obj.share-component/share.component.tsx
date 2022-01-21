import { Hbox } from '@atomic/obj.hbox'
import React from 'react'
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton
} from 'react-share'

interface ShareComponentProps {
  link: string
}
export const ShareComponent: React.FC<ShareComponentProps> = ({ link }) => {
  return (
    <Hbox>
      <Hbox.Item noGrow={true} hAlign={'center'}>
        <FacebookShareButton url={link}>
          <FacebookIcon size={24} round={true} />
        </FacebookShareButton>
      </Hbox.Item>
      <Hbox.Separator />
      <Hbox.Item noGrow={true} hAlign={'center'}>
        <WhatsappShareButton url={link}>
          <WhatsappIcon size={24} round={true} />
        </WhatsappShareButton>
      </Hbox.Item>
      <Hbox.Separator />
      <Hbox.Item noGrow={true} hAlign={'center'}>
        <LinkedinShareButton url={link}>
          <LinkedinIcon size={24} round={true} />
        </LinkedinShareButton>
      </Hbox.Item>
      <Hbox.Separator />
      <Hbox.Item noGrow={true} hAlign={'center'}>
        <TwitterShareButton url={link}>
          <TwitterIcon size={24} round={true} />
        </TwitterShareButton>
      </Hbox.Item>
      <Hbox.Separator />
      <Hbox.Item noGrow={true} hAlign={'center'}>
        <EmailShareButton url={link}>
          <EmailIcon size={24} round={true} />
        </EmailShareButton>
      </Hbox.Item>
    </Hbox>
  )
}
