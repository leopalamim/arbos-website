import { HarvestSectionWrapper } from "@app/modules/home/harvest/harvest.style";
import { ImageObj } from "@atomic/atm.image";
import { Separator } from "@atomic/atm.separator";
import { Body, H2, H3 } from "@atomic/atm.typography";
import { Grid, OnlyDesktop } from "@atomic/obj.grid";
import { Hbox } from "@atomic/obj.hbox";
import { Row, Col } from "react-flexbox-grid/dist/react-flexbox-grid";

export const HarvestSection = () => {
  return (
    <HarvestSectionWrapper>
      <Grid>
        <OnlyDesktop>
          <Separator type={"section"} />
        </OnlyDesktop>
        <Row middle={"xs"}>
          <Col xs={12} lg={8}>
          </Col>
          <Col xs={12} lg={4}>
            <H2>Como funciona?</H2>
            <Hbox>
              <Hbox.Item noGrow={true} vAlign={"center"}>
                <ImageObj.LettuceIcon />
              </Hbox.Item>
              <Hbox.Separator />
              <Hbox.Item vAlign={"center"}>
                <H3>Nós plantamos</H3>
                <Body>
                  Plantamos nossos vegetais por hidroponia. Controlamos tudo, desde a temperatura até os nutrientes que os vegetais recebem, o que os deixa
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
        <OnlyDesktop>
          <Separator type={"section"} />
        </OnlyDesktop>
      </Grid>
    </HarvestSectionWrapper>
  );
};
