import { Row, Col } from 'react-flexbox-grid/dist/react-flexbox-grid'
import { Grid } from 'atomic/obj.grid/grid'
import { Separator } from '@atomic/atm.separator/separator.style'
import { RequestHubForm } from '@app/modules/home/request-hub/request-hub-form.component'
import { H2, Body } from 'atomic/atm.typography/typography'
import React from 'react'
import { HaveAHubComponent } from '@app/modules/components/have-a-hub/have-a-hub.component'
import { ImageObj } from '@atomic/atm.image'

export const RequestHubSection: React.FC = () => (
  <Grid>
    <Row between={'xs'} middle={'xs'}>
      <Col xs={12} md={6}>
        <ImageObj.Lettuce />
      </Col>
      <Col xs={12} md={6}>
        <H2>Seu condomínio ainda não possui um Hub da Arbos?</H2>
        <RequestHubForm />
      </Col>
    </Row>
    <Separator type={'section'} />
  </Grid>
)
