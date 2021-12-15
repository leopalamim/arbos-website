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
        <Separator type={'section'} />
        <Row between={"xs"} middle={"sm"} around={"xs"}>
          <Col xs={12} md={12} lg={4}>
            <H2>
              Por que é mais saudável se alimentar com a Arbos?
            </H2>
            <Body>Conheça os benefícios dos nossos vegetais e melhore sua saúde.</Body>
            <Separator type={"subsection"} />
            <Link to={"requestHubSection"} smooth>
              <Button kind={"callToAction"}>Quero no meu condomínio</Button>
            </Link>
            <Separator type={"subsection"} />
          </Col>
          <Col xs={12} md={12} lg={8}>
            <Row>
              <Col xs={12} lg={6}>
                <CardFrame hoverEffect={true} paddingType={"large"}>
                  <Hbox>
                    <Hbox.Item noGrow={true} vAlign={"center"}>
                      <ImageObj.LettuceIcon />
                    </Hbox.Item>
                    <Hbox.Separator />
                    <Hbox.Item vAlign={"center"}>
                      <H3>Mais frescos</H3>
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
                <CardFrame hoverEffect={true} paddingType={"large"}>
                  <Hbox>
                    <Hbox.Item noGrow={true} vAlign={"center"}>
                      <ImageObj.NoChemicalIcon />
                    </Hbox.Item>
                    <Hbox.Separator />
                    <Hbox.Item vAlign={"center"}>
                      <H3>Mais saudáveis</H3>
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
                <CardFrame hoverEffect={true} paddingType={"large"}>
                  <Hbox>
                    <Hbox.Item noGrow={true} vAlign={"center"}>
                      <ImageObj.ClockIcon />
                    </Hbox.Item>
                    <Hbox.Separator />
                    <Hbox.Item vAlign={"center"}>
                      <H3>Mais duráveis</H3>
                    </Hbox.Item>
                  </Hbox>
                  <Separator type={"line"} />
                  <Body>
                    Seu vegetal pode durar até 1 semana. Basta colocá-lo em um copo d'água com a raiz submersa
                  </Body>
                </CardFrame>
                <Separator type={"line"} />
              </Col>
              <Col xs={12} lg={6}>
                <CardFrame hoverEffect={true} paddingType={"large"}>
                  <Hbox>
                    <Hbox.Item noGrow={true} vAlign={"center"}>
                      <ImageObj.WorldIcon />
                    </Hbox.Item>
                    <Hbox.Separator />
                    <Hbox.Item vAlign={"center"}>
                      <H3>Mais sustentáveis</H3>
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
