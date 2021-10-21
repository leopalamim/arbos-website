import { ImageObj } from '@atomic/atm.image'
import { Separator } from '@atomic/atm.separator/separator.style'
import { Hbox } from '@atomic/obj.hbox'
import { H1 } from 'atomic/atm.typography/typography'
import { Grid } from 'atomic/obj.grid/grid'
import { Row, Col } from 'react-flexbox-grid/dist/react-flexbox-grid'

interface SectionTitleProps {
  title: string
  subtitle?: string
  largeSeparator?: boolean
}

export const PageHeading: React.FC<SectionTitleProps> = (props) => {
  return (
    <Grid>
      <Row center={'xs'}>
        <Col>
          <Separator type={'section'} />
          <Hbox>
            <Hbox.Item noGrow={true} vAlign={'center'} hAlign={'center'}>
              <ImageObj.Leaf />
            </Hbox.Item>
            <Hbox.Item noGrow={true} vAlign={'center'} hAlign={'center'}>
              <H1>{props.title}</H1>
            </Hbox.Item>
          </Hbox>
          <Separator type={'section'} />
        </Col>
      </Row>
    </Grid>
  )
}
