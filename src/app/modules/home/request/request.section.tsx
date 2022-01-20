import { Row, Col } from "react-flexbox-grid/dist/react-flexbox-grid";
import { Grid, OnlyDesktop } from "atomic/obj.grid/grid";
import { Separator } from "@atomic/atm.separator/separator.style";
import { RequestForm } from "@app/modules/home/request/request-form.component";
import { Body, H2, DisplayStyled } from "atomic/atm.typography/typography";
import React from "react";
import { ImageObj } from "@atomic/atm.image";
import { CardFrame } from "@atomic/mol.card";
import { Hbox } from "@atomic/obj.hbox";

export const RequestSection: React.FC = () => (
  <Grid>
    <OnlyDesktop>
      <Separator type={"subsection"} />
    </OnlyDesktop>
    <Row start={"lg"} middle={"xs"}>
      <Col xs={12} lg={6}>
        <DisplayStyled>Em breve estaremos funcionando!</DisplayStyled>
        <Body>Preecha seu email e saiba das atualizações da Arbos.</Body>
        <Separator type={"line"} />
        <RequestForm />
        <Separator type={"subsection"} />
      </Col>
      <Col xs={12} lg={6}>
        <Hbox>
          <Hbox.Item hAlign={"center"}>
            <ImageObj.Lettuce />
          </Hbox.Item>
        </Hbox>
      </Col>
    </Row>
    <Separator type={"section"} />
  </Grid>
);
