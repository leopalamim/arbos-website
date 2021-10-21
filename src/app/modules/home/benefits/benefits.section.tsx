import React from "react";
import { Grid } from "atomic/obj.grid/grid";
import { Row, Col } from "react-flexbox-grid/dist/react-flexbox-grid";
import { Fade } from "react-reveal";

import { Hbox } from "atomic/obj.hbox/hbox.component";
import { ImageObj } from "atomic/atm.image";
import { Separator } from "@atomic/atm.separator/separator.style";
import { Body, H3 } from "atomic/atm.typography";
import { HaveAHubComponent } from "@app/modules/components/have-a-hub/have-a-hub.component";

export const BenefitsSection: React.FC = () => {
  return (
    <>
      <Grid>
        <Row between={"xs"} middle={"sm"} around={"xs"}>
          <Col xs={12} md={12} lg={4}>
            <HaveAHubComponent />
            <Separator type={"subsection"} />
          </Col>
          <Col xs={12} md={12} lg={8}>
            <Fade bottom cascade>
              <Hbox>
                <Hbox.Item noGrow={true} vAlign={"center"}>
                  <ImageObj.LettuceIcon />
                </Hbox.Item>
                <Hbox.Separator />
                <Hbox.Item vAlign={"center"}>
                  <H3>Vegetais frescos</H3>
                  <Body>
                    Colha seu próprio vegetal diretamente do Hub da Arbos, dentro do seu condomínio. Nós garantimos seu
                    frescor.
                  </Body>
                  <Separator type={"line"} />
                </Hbox.Item>
              </Hbox>
              <Hbox>
                <Hbox.Item noGrow={true} vAlign={"center"}>
                  <ImageObj.NoChemicalIcon />
                </Hbox.Item>
                <Hbox.Separator />
                <Hbox.Item vAlign={"center"}>
                  <H3>Sem agrotóxicos</H3>
                  <Body>
                    Prezamos pela sua saúde. Durante nosso cultivo não usamos qualquer tipo de pesticida ou conservante.
                  </Body>
                  <Separator type={"line"} />
                </Hbox.Item>
              </Hbox>
              <Hbox>
                <Hbox.Item noGrow={true} vAlign={"center"}>
                  <ImageObj.ClockIcon />
                </Hbox.Item>
                <Hbox.Separator />
                <Hbox.Item vAlign={"center"}>
                  <H3>A qualquer hora</H3>
                  <Body>
                    Nosso hub vai estar no seu condomínio a qualquer hora. Pode colher seu vegetal até de madrugada.
                  </Body>
                  <Separator type={"line"} />
                </Hbox.Item>
              </Hbox>
              <Hbox>
                <Hbox.Item noGrow={true} vAlign={"center"}>
                  <ImageObj.WorldIcon />
                </Hbox.Item>
                <Hbox.Separator />
                <Hbox.Item vAlign={"center"}>
                  <H3>Sustentabilidade</H3>
                  <Body>
                    Reutilizamos 95% da água utilizada no plantio. Ao comprar um vegetal da Arbos, você está ajudando o
                    seu planeta a se tornar mais sustentável.
                  </Body>
                  <Separator type={"line"} />
                </Hbox.Item>
              </Hbox>
            </Fade>
          </Col>
        </Row>
      </Grid>
    </>
  );
};
