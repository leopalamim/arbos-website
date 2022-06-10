import React from "react";
import { Grid } from "atomic/obj.grid/grid";
import { Row, Col } from "react-flexbox-grid/dist/react-flexbox-grid";
import { Hbox } from "atomic/obj.hbox/hbox.component";
import { ImageObj } from "atomic/atm.image";
import { Separator } from "@atomic/atm.separator/separator.style";
import { Body, H2, H3, Stats } from "atomic/atm.typography";
import { CardFrame } from "@atomic/mol.card";

export const HowItWorksSection: React.FC = () => {
  return (
    <>
      <Grid>
        <Separator type={"section"} />
        <Row center={"xs"}>
          <Col xs={12}>
            <H2>Como funciona?</H2>
          </Col>
        </Row>
        <Separator type={"subsection"} />
        <Row>
          <Col xs={12} lg={4}>
            <Hbox>
              <Hbox.Item hAlign={"center"}>
                <ImageObj.Bowl />
              </Hbox.Item>
            </Hbox>
            <Separator type={"line"} />
            <CardFrame hoverEffect={true} paddingType={"large"}>
              <Hbox>
                <Hbox.Item noGrow={true} vAlign={"center"}>
                  <Stats>1</Stats>
                </Hbox.Item>
                <Hbox.Separator />
                <Hbox.Item vAlign={"center"}>
                  <H3>Escolha os packs que quer vender</H3>
                </Hbox.Item>
              </Hbox>
              <Separator type={"line"} />
              <Body>
                Nosso catálogo conta com packs de dar água na boca!
              </Body>
            </CardFrame>
            <Separator type={"line"} />
          </Col>
          <Col xs={12} lg={4}>
            <Hbox>
              <Hbox.Item hAlign={"center"}>
                <ImageObj.Menu />
              </Hbox.Item>
            </Hbox>
            <Separator type={"line"} />
            <CardFrame hoverEffect={true} paddingType={"large"}>
              <Hbox>
                <Hbox.Item noGrow={true} vAlign={"center"}>
                  <Stats>2</Stats>
                </Hbox.Item>
                <Hbox.Separator />
                <Hbox.Item vAlign={"center"}>
                  <H3>Defina os dias de recebimento</H3>
                </Hbox.Item>
              </Hbox>
              <Separator type={"line"} />
              <Body>Receba nossos packs nos dias da semana que forem melhores para você!</Body>
            </CardFrame>
            <Separator type={"line"} />
          </Col>
          <Col xs={12} lg={4}>
            <Hbox>
              <Hbox.Item hAlign={"center"}>
                <ImageObj.Truck />
              </Hbox.Item>
            </Hbox>
            <Separator type={"line"} />
            <CardFrame hoverEffect={true} paddingType={"large"}>
              <Hbox>
                <Hbox.Item noGrow={true} vAlign={"center"}>
                  <Stats>3</Stats>
                </Hbox.Item>
                <Hbox.Separator />
                <Hbox.Item vAlign={"center"}>
                  <H3>Receba na porta do seu comércio</H3>
                </Hbox.Item>
              </Hbox>
              <Separator type={"line"} />
              <Body>
                Você pode vender saúde sem sair da sua loja. Deixe que nós levamos!
              </Body>
            </CardFrame>
            <Separator type={"line"} />
          </Col>
        </Row>
        <Separator type={"section"} />
      </Grid>
    </>
  );
};
