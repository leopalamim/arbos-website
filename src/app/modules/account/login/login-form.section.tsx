import { Row, Col } from 'react-flexbox-grid/dist/react-flexbox-grid'
import { Grid } from 'atomic/obj.grid/grid'
import { Separator } from '@atomic/atm.separator/separator.style'
import { LoginForm } from 'app/modules/account/login/login-form.component'
import { H2 } from 'atomic/atm.typography/typography'
import React from 'react'

export const LoginSection: React.FC = () => (
  <Grid>
    <Row center={'xs'}>
      <Col xs={12} md={6}>
        <LoginForm />
      </Col>
    </Row>
    <Separator type={'section'} />
  </Grid>
)
