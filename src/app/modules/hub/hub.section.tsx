import { Separator } from "@atomic/atm.separator";
import { Body } from "@atomic/atm.typography";
import { Grid } from "@atomic/obj.grid";
import { Row, Col } from "react-flexbox-grid/dist/react-flexbox-grid";

export const HubSection = () => {
  return (
    <Grid>
      <Row>
        <Col xs={12}>
          <Separator type={"section"} />
          <Body>This is the hub page</Body>
          <Separator type={"section"} />
        </Col>
      </Row>
    </Grid>
  );
};
