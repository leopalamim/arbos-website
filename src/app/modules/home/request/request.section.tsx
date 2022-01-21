import { Row, Col } from "react-flexbox-grid/dist/react-flexbox-grid";
import { Grid, OnlyDesktop } from "atomic/obj.grid/grid";
import { Separator } from "@atomic/atm.separator/separator.style";
import { RequestForm } from "@app/modules/home/request/request-form.component";
import { Body, H2, Enhance, LinkStyled } from "atomic/atm.typography/typography";
import React from "react";
import { ImageIcon, ImageObj } from "@atomic/atm.image";
import { Hbox } from "@atomic/obj.hbox";
import { ExternalLinks } from "@app/modules/app/external-links";

export const RequestSection: React.FC = () => (
  <Grid>
    <OnlyDesktop>
      <Separator type={"subsection"} />
    </OnlyDesktop>
    <Row center ={'xs'}>
      <Col xs={12} lg={6}>
        <H2>Faltam <Enhance>poucos dias</Enhance> para começarmos a entregar!</H2>
        <Body>Ganhe <Enhance>10% de desconto</Enhance> em sua primeira compra ao preencher seu email!</Body>
        <Separator type={"subsection"} />
        <RequestForm />
      </Col>
    </Row>
    <Separator type={"section"} />
  </Grid>
);
