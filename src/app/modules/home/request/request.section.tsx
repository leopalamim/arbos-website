import { Row, Col } from "react-flexbox-grid/dist/react-flexbox-grid";
import { Grid, OnlyDesktop } from "atomic/obj.grid/grid";
import { Separator } from "@atomic/atm.separator/separator.style";
import { Body, H2, Enhance, LinkStyled } from "atomic/atm.typography/typography";
import React from "react";
import { Button } from "@atomic/atm.button";

export const RequestSection: React.FC = () => (
  <Grid>
    <OnlyDesktop>
      <Separator type={"subsection"} />
    </OnlyDesktop>
    <Row center ={'xs'}>
      <Col xs={12} lg={6}>
        <H2>Ganhe <Enhance>30% de desconto</Enhance> em sua primeira compra!</H2>
        <Body>Tá esperando o que pra entregar <Enhance>saúde</Enhance>?</Body>
        <Separator type={"subsection"} />
        <Button kind={"callToAction"} href={"https://wa.me/5511983101691?text=Olá!%20Quero%20realizar%20uma%20compra."}>Quero fazer um pedido!</Button>
      </Col>
    </Row>
    <Separator type={"section"} />
  </Grid>
);
