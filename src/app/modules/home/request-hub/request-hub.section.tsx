import { Row, Col } from "react-flexbox-grid/dist/react-flexbox-grid";
import { Grid } from "atomic/obj.grid/grid";
import { Separator } from "@atomic/atm.separator/separator.style";
import { RequestHubForm } from "@app/modules/home/request-hub/request-hub-form.component";
import { H2 } from "atomic/atm.typography/typography";
import React from "react";
import { ImageObj } from "@atomic/atm.image";
import { CardFrame } from "@atomic/mol.card";
import { Hbox } from "@atomic/obj.hbox";

export const RequestHubSection: React.FC = () => (
  <Grid>
    <Separator type={"section"} />
    <Row center={"xs"} start={'lg'} middle={'xs'}>
      <Col xs={12} lg={6}>
        <CardFrame paddingType={"large"}>
          <H2>Seu condomínio ainda não possui um Hub da Arbos?</H2>
          <RequestHubForm />
        </CardFrame>
      </Col>
      <Col xs={12} lg={6}>
        <Hbox>
          <Hbox.Item hAlign={'center'}>
            <ImageObj.Garden />
          </Hbox.Item>
        </Hbox>
      </Col>
    </Row>
    <Separator type={"section"} />
  </Grid>
);
