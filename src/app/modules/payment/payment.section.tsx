import { Row, Col } from "react-flexbox-grid/dist/react-flexbox-grid";
import { Grid } from "atomic/obj.grid/grid";
import { Separator } from "@atomic/atm.separator/separator.style";
import React from "react";
import { Widget } from "@typeform/embed-react";

export const PaymentSection: React.FC = () => (
  <Grid>
    <Separator type={"subsection"} />
    <Row center={"xs"}>
      <Col xs={12}>
        <Widget id={"DJbEAKqK"} style={{ height: "500px" }} />
      </Col>
    </Row>
    <Separator type={"section"} />
  </Grid>
);
