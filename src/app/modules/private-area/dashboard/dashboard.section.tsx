import { FaIcon } from "@atomic/atm.font-awesome";
import { Body, Stats } from "@atomic/atm.typography";
import { CardFrame } from "@atomic/mol.card";
import { Grid } from "@atomic/obj.grid";
import { Hbox } from "@atomic/obj.hbox";
import { Row, Col } from "react-flexbox-grid/dist/react-flexbox-grid";

export const DashboardSection: React.FC = () => {
  return (
    <Grid>
      <Row>
        <Col xs={4}>
          <CardFrame paddingType={"large"}>
            <Hbox>
              <Hbox.Item noGrow={true} vAlign={'center'}>
                <FaIcon.Star size={"2x"} />
              </Hbox.Item>
              <Hbox.Separator />
              <Hbox.Item vAlign={'center'}>
                <Body>Número de Hubs ativos</Body>
                <Stats>1</Stats>
              </Hbox.Item>
            </Hbox>
          </CardFrame>
        </Col>
        <Col xs={4}>
          <CardFrame paddingType={'large'}>
            <Hbox>
              <Hbox.Item noGrow={true} vAlign={'center'}>
                <FaIcon.PuzzlePiece size={"2x"} />
              </Hbox.Item>
              <Hbox.Separator />
              <Hbox.Item vAlign={'center'}>
                <Body>Consumidores recorrentes</Body>
                <Stats>4</Stats>
              </Hbox.Item>
            </Hbox>
          </CardFrame>
        </Col>
      </Row>
    </Grid>
  );
};
