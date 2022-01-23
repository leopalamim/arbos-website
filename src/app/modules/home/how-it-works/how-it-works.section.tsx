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
          <Col xs={12} lg={3}>
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
                  <H3>Escolha suas saladas preferidas</H3>
                </Hbox.Item>
              </Hbox>
              <Separator type={"line"} />
              <Body>
                Nosso cardápio conta com saladas de dar água na boca para ter saúde com gosto!
              </Body>
            </CardFrame>
            <Separator type={"line"} />
          </Col>
          <Col xs={12} lg={3}>
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
                  <H3>Defina o dia de entrega</H3>
                </Hbox.Item>
              </Hbox>
              <Separator type={"line"} />
              <Body>Nossa entrega programada é flexível e encaixa na sua rotina, sem atrasos!</Body>
            </CardFrame>
            <Separator type={"line"} />
          </Col>
          <Col xs={12} lg={3}>
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
                  <H3>Receba na porta da sua casa</H3>
                </Hbox.Item>
              </Hbox>
              <Separator type={"line"} />
              <Body>
                Você pode ser saudável sem sair de casa. Deixe que nós levamos!
              </Body>
            </CardFrame>
            <Separator type={"line"} />
          </Col>
          <Col xs={12} lg={3}>
            <Hbox>
              <Hbox.Item hAlign={"center"}>
                <ImageObj.Eat />
              </Hbox.Item>
            </Hbox>
            <Separator type={"line"} />
            <CardFrame hoverEffect={true} paddingType={"large"}>
              <Hbox>
                <Hbox.Item noGrow={true} vAlign={"center"}>
                  <Stats>4</Stats>
                </Hbox.Item>
                <Hbox.Separator />
                <Hbox.Item vAlign={"center"}>
                  <H3>Misture sua salada e aproveite</H3>
                </Hbox.Item>
              </Hbox>
              <Separator type={"line"} />
              <Body>
                Pegue sua refeição, misture-a como quiser e coma com sabor!
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
