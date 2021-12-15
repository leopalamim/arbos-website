import { Row, Col } from "react-flexbox-grid/dist/react-flexbox-grid";
import { Grid, OnlyDesktop } from "atomic/obj.grid/grid";
import { Separator } from "@atomic/atm.separator/separator.style";
import { RequestHubForm } from "@app/modules/home/request-hub/request-hub-form.component";
import { Body, H2 } from "atomic/atm.typography/typography";
import React from "react";
import { ImageObj } from "@atomic/atm.image";
import { CardFrame } from "@atomic/mol.card";
import { Hbox } from "@atomic/obj.hbox";

export const RequestHubSection: React.FC = () => (
  <Grid>
    <OnlyDesktop>
      <Separator type={"subsection"} />
    </OnlyDesktop>
    <Row start={'lg'} middle={'xs'}>
      <Col xs={12} lg={6}>
        <H2>Seu condomínio ainda não possui um Hub da Arbos?</H2>
        <Body>Preencha seus dados abaixo e nós cuidamos do resto.</Body>
        <Separator type={'line'} />
        <CardFrame paddingType={"large"}>
          <RequestHubForm />
        </CardFrame>
        <Separator type={'subsection'} />
      </Col>
      <Col xs={12} lg={6}>
        <Hbox>
          <Hbox.Item hAlign={'center'}>
            <ImageObj.Lettuce />
          </Hbox.Item>
        </Hbox>
      </Col>
    </Row>
    <Separator type={"section"} />
  </Grid>
);
