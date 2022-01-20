import React from "react";
import { Grid } from "atomic/obj.grid/grid";
import { Row, Col } from "react-flexbox-grid/dist/react-flexbox-grid";
import { Hbox } from "atomic/obj.hbox/hbox.component";
import { ImageObj } from "atomic/atm.image";
import { Separator } from "@atomic/atm.separator/separator.style";
import { Body, H1, H2, H3, Stats } from "atomic/atm.typography";
import { CardFrame } from "@atomic/mol.card";

export const BenefitsSection: React.FC = () => {
  return (
    <>
      <Grid>
        <Separator type={"section"} />
        <Row center={"xs"}>
          <Col xs={12}>
            <H1>Como funciona?</H1>
          </Col>
        </Row>
        <Separator type={"subsection"} />
        <Row>
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
                  <Stats>1</Stats>
                </Hbox.Item>
                <Hbox.Separator />
                <Hbox.Item vAlign={"center"}>
                  <H3>Você escolhe</H3>
                </Hbox.Item>
              </Hbox>
              <Separator type={"line"} />
              <Body>
                Entregamos saladas semi-prontas na porta da sua casa. É só misturar com nossos molhos e comer!
              </Body>
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
                  <Stats>2</Stats>
                </Hbox.Item>
                <Hbox.Separator />
                <Hbox.Item vAlign={"center"}>
                  <H3>Nós entregamos</H3>
                </Hbox.Item>
              </Hbox>
              <Separator type={"line"} />
              <Body>
                Produzimos nossas saladas com a maior eficiência para você ser saudável sem pagar muito por isso
              </Body>
            </CardFrame>
            <Separator type={"line"} />
          </Col>
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
                  <Stats>3</Stats>
                </Hbox.Item>
                <Hbox.Separator />
                <Hbox.Item vAlign={"center"}>
                  <H3>Você mistura</H3>
                </Hbox.Item>
              </Hbox>
              <Separator type={"line"} />
              <Body>Os vegetais são plantados aqui no bairro sem qualquer tipo de pesticida ou conservante.</Body>
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
                  <H3>Você come</H3>
                </Hbox.Item>
              </Hbox>
              <Separator type={"line"} />
              <Body>
                Reutilizamos 95% da água utilizada no plantio. Ajude o seu planeta a se tornar mais sustentável.
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
