import { ImageObj } from "@atomic/atm.image"
import { Separator } from "@atomic/atm.separator"
import { Body, H2 } from "@atomic/atm.typography"
import { Grid } from "@atomic/obj.grid"
import { Hbox } from "@atomic/obj.hbox"
import { Row, Col } from "react-flexbox-grid/dist/react-flexbox-grid"

export const HarvestSection = () => {
  return(
    <Grid>
      <Row middle={'xs'}>
        <Col xs={12} lg={6}>
          <Hbox>
            <Hbox.Item hAlign={'center'}>
              <ImageObj.Harvest />
            </Hbox.Item>
          </Hbox>
        </Col>
        <Col xs={12} lg={6}>
          <H2>A hidroponia</H2>
          <Body>Nós plantamos nossos vegetais por hidroponia, uma técnica de plantio sem solo. Em nossas fazendas, controlamos tudo, desde a temperatura até os nutrientes que os vegetais recebem, o que os deixa saborosos.</Body>
          <Separator type={'line'} />
          <Body>Nossos vegetais mantém o frescor e o sabor por muito mais tempo, com a raiz submersa em 2cm de água.</Body>
        </Col>
      </Row>
      <Separator type={'section'} />
    </Grid>
  )
}