import React from "react";
import { Grid } from "atomic/obj.grid/grid";
import { Row, Col } from "react-flexbox-grid/dist/react-flexbox-grid";
import { Hbox } from "atomic/obj.hbox/hbox.component";
import { ImageObj } from "atomic/atm.image";
import { Separator } from "@atomic/atm.separator/separator.style";
import { Body, H2, H3 } from "atomic/atm.typography";
import { CardFrame } from "@atomic/mol.card";
import { Link } from "react-scroll";
import { Button } from "@atomic/atm.button";

export const BenefitsSection: React.FC = () => {
  return (
    <>
      <Grid>
        <Separator type={"section"} />
        <Row between={"xs"} middle={"sm"} around={"xs"}>
          <Col xs={12} md={12} lg={4}>
            <H2>Por que é mais saudável e barato se alimentar com a Arbos?</H2>
            <Body>Conheça os benefícios dos nossos vegetais e melhore sua saúde sem pagar muito por isso</Body>
            <Separator type={"subsection"} />
            <Link to={"requestSection"} smooth>
              <Button kind={"callToAction"}>Quero ser mais saudável</Button>
            </Link>
            <Separator type={"subsection"} />
          </Col>
          <Col xs={12} md={12} lg={8}>
            <Row>
              <Col xs={12} lg={6}>
                <CardFrame hoverEffect={true} paddingType={"large"}>
                  <Hbox>
                    <Hbox.Item noGrow={true} vAlign={"center"}>
                      <ImageObj.GiftIcon />
                    </Hbox.Item>
                    <Hbox.Separator />
                    <Hbox.Item vAlign={"center"}>
                      <H3>Mais prático</H3>
                    </Hbox.Item>
                  </Hbox>
                  <Separator type={"line"} />
                  <Body>
                    Te enviamos um box com saladas semi-prontas para a semana inteira. É só misturar com os molhos e
                    comer!
                  </Body>
                </CardFrame>
                <Separator type={"line"} />
              </Col>
              <Col xs={12} lg={6}>
                <CardFrame hoverEffect={true} paddingType={"large"}>
                  <Hbox>
                    <Hbox.Item noGrow={true} vAlign={"center"}>
                      <ImageObj.DollarIcon />
                    </Hbox.Item>
                    <Hbox.Separator />
                    <Hbox.Item vAlign={"center"}>
                      <H3>Mais barato</H3>
                    </Hbox.Item>
                  </Hbox>
                  <Separator type={"line"} />
                  <Body>
                    Produzimos nossas saladas com a maior eficiência para você ser saudável sem pagar muito por isso
                  </Body>
                </CardFrame>
                <Separator type={"line"} />
              </Col>
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
                  <Body>Os vegetais são plantados aqui no bairro sem qualquer tipo de pesticida ou conservante.</Body>
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
