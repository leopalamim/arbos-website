import { Button } from '@atomic/atm.button'
import { Separator } from '@atomic/atm.separator'
import { Body, Enhance, H2 } from '@atomic/atm.typography'
import React from 'react'
import { Fade } from 'react-reveal'

export const HaveAHubComponent: React.FC = () => {
  return (
    <Fade bottom>
      <H2>Tenha um <Enhance>Hub</Enhance> no seu condomínio</H2>
      <Body>
        Colha seu próprio vegetal do quintal de casa com um Hub da Arbos.
      </Body>
      <Separator type={'subsection'} />
      <Button kind={'callToAction'}>
        Quero no meu condomínio
      </Button>
    </Fade>
  )
}
