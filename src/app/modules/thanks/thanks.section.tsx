import { ExternalLinks } from "@app/modules/app/external-links";
import { Separator } from "@atomic/atm.separator";
import { Body, Enhance } from "@atomic/atm.typography";
import { Grid } from "@atomic/obj.grid";
import { Hbox } from "@atomic/obj.hbox";
import { ShareComponent } from "@atomic/obj.share-component";
import { Row, Col } from "react-flexbox-grid/dist/react-flexbox-grid";

export const ThanksSection: React.FC = () => (
  <Grid>
    <Row center={"xs"}>
      <Col xs={6}>
        <Body>
          Agradecemos muito pela confiança. Assim que estivermos entregando, vamos te notificar por email. Quer ganhar{" "}
          <Enhance>mais 10% de desconto</Enhance> em sua primeira compra? É só convidar 2 amigos e guardar os prints!
        </Body>
        <Separator type={"subsection"} />
        <Hbox>
          <Hbox.Item hAlign={"center"}>
            <ShareComponent link={ExternalLinks.Website} />
          </Hbox.Item>
        </Hbox>
      </Col>
    </Row>
    <Separator type={"section"} />
  </Grid>
);
