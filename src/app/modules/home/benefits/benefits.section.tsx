import React from "react";
import { Grid } from "atomic/obj.grid/grid";
import { Row, Col } from "react-flexbox-grid/dist/react-flexbox-grid";
import { Hbox } from "atomic/obj.hbox/hbox.component";
import { ImageObj } from "atomic/atm.image";
import { Separator } from "@atomic/atm.separator/separator.style";
import { Body, H2, H3 } from "atomic/atm.typography";
import { CardFrame } from "@atomic/mol.card";
import { Link } from 'react-scroll'
import { Button } from "@atomic/atm.button";

export const BenefitsSection: React.FC = () => {
  return (
    <>
      <Grid>
        <Row between={"xs"} middle={"sm"} around={"xs"}>
          <Col xs={12} md={12} lg={4}>
            <H2>
              O que você vai ter no quintal de casa
            </H2>
            <Body>Você pode ter uma horta no quintal de casa, onde vai poder colher vegetais frescos, sem agrotóxicos e a qualquer hora, além de ajudar o planeta.</Body>
            <Separator type={"subsection"} />
            <Link to={"requestHubSection"} smooth>
              <Button kind={"callToAction"}>Quero no meu condomínio</Button>
            </Link>
            <Separator type={"subsection"} />
          </Col>
          <Col xs={12} md={12} lg={8}>
            <Row>
              <Col xs={12} lg={6}>
                <CardFrame paddingType={"large"}>
                  <Hbox>
                    <Hbox.Item noGrow={true} vAlign={"center"}>
                      <ImageObj.LettuceIcon />
                    </Hbox.Item>
                    <Hbox.Separator />
                    <Hbox.Item vAlign={"center"}>
                      <H3>Vegetais frescos</H3>
                    </Hbox.Item>
                  </Hbox>
                  <Separator type={"line"} />
                  <Body>
                    Colha seu próprio vegetal diretamente do Hub da Arbos, dentro do seu condomínio. Nós garantimos seu
                    frescor.
                  </Body>
                </CardFrame>
                <Separator type={"line"} />
              </Col>
              <Col xs={12} lg={6}>
                <CardFrame paddingType={"large"}>
                  <Hbox>
                    <Hbox.Item noGrow={true} vAlign={"center"}>
                      <ImageObj.NoChemicalIcon />
                    </Hbox.Item>
                    <Hbox.Separator />
                    <Hbox.Item vAlign={"center"}>
                      <H3>Sem agrotóxicos</H3>
                    </Hbox.Item>
                  </Hbox>
                  <Separator type={"line"} />
                  <Body>
                    Prezamos pela sua saúde. Durante nosso cultivo não usamos qualquer tipo de pesticida ou conservante.
                  </Body>
                </CardFrame>
                <Separator type={"line"} />
              </Col>
              <Col xs={12} lg={6}>
                <CardFrame paddingType={"large"}>
                  <Hbox>
                    <Hbox.Item noGrow={true} vAlign={"center"}>
                      <ImageObj.ClockIcon />
                    </Hbox.Item>
                    <Hbox.Separator />
                    <Hbox.Item vAlign={"center"}>
                      <H3>A qualquer hora</H3>
                    </Hbox.Item>
                  </Hbox>
                  <Separator type={"line"} />
                  <Body>
                    Nosso hub vai estar no seu condomínio a qualquer hora. Pode colher seu vegetal até de madrugada.
                  </Body>
                </CardFrame>
                <Separator type={"line"} />
              </Col>
              <Col xs={12} lg={6}>
                <CardFrame paddingType={"large"}>
                  <Hbox>
                    <Hbox.Item noGrow={true} vAlign={"center"}>
                      <ImageObj.WorldIcon />
                    </Hbox.Item>
                    <Hbox.Separator />
                    <Hbox.Item vAlign={"center"}>
                      <H3>Sustentabilidade</H3>
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
          </Col>
        </Row>
        <Separator type={"section"} />
      </Grid>
    </>
  );
};
