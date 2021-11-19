import { ImageObj } from "@atomic/atm.image";
import { Separator } from "@atomic/atm.separator";
import { Body, H3 } from "@atomic/atm.typography";
import { Grid } from "@atomic/obj.grid";
import { Hbox } from "@atomic/obj.hbox";
import { Row, Col } from "react-flexbox-grid/dist/react-flexbox-grid";

export const HarvestSection = () => {
  return (
    <Grid>
      <Row middle={"xs"}>
        <Col xs={12} lg={6}>
          <Hbox>
            <Hbox.Item hAlign={"center"}>
              <ImageObj.Harvest />
              <Separator type={'subsection'} />
            </Hbox.Item>
          </Hbox>
        </Col>
        <Col xs={12} lg={6}>
          <Hbox>
            <Hbox.Item noGrow={true} vAlign={"center"}>
              <ImageObj.LettuceIcon />
            </Hbox.Item>
            <Hbox.Separator />
            <Hbox.Item vAlign={"center"}>
              <H3>Nós plantamos</H3>
              <Body>
                Nós plantamos nossos vegetais por hidroponia, uma técnica de plantio sem solo. Em nossas fazendas,
                controlamos tudo, desde a temperatura até os nutrientes que os vegetais recebem, o que os deixa
                saborosos.
              </Body>
              <Separator type={"line"} />
            </Hbox.Item>
          </Hbox>
          <Hbox>
            <Hbox.Item noGrow={true} vAlign={"center"}>
              <ImageObj.Truck />
            </Hbox.Item>
            <Hbox.Separator />
            <Hbox.Item vAlign={"center"}>
              <H3>Nós levamos</H3>
              <Body>
                Nós levamos os vegetais fresquinhos até seu condomínio, ainda no meio de cultivo, para manter o frescor
                até a hora da colheita.
              </Body>
              <Separator type={"line"} />
            </Hbox.Item>
          </Hbox>
          <Hbox>
            <Hbox.Item noGrow={true} vAlign={"center"}>
              <ImageObj.Sprout />
            </Hbox.Item>
            <Hbox.Separator />
            <Hbox.Item vAlign={"center"}>
              <H3>Você colhe</H3>
              <Body>
                Você colhe o vegetal na hora da compra. Nossos vegetais mantém o frescor e o sabor por muito mais tempo
                deixando a raiz submersa em 2cm de água.
              </Body>
              <Separator type={"line"} />
            </Hbox.Item>
          </Hbox>
        </Col>
      </Row>
    </Grid>
  );
};
