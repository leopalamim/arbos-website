import { Row, Col } from "react-flexbox-grid/dist/react-flexbox-grid";
import { Grid } from "atomic/obj.grid/grid";
import { Separator } from "@atomic/atm.separator/separator.style";

import { Accordion } from "@atomic/mol.accordion/accordion.component";
import { Body } from "@atomic/atm.typography";
import { AnswerWrapper } from "./faq.style";
import { faq } from './faq-content';

export const FaqSection: React.FC = () => {
  return (
    <Grid>
      <Row center={"xs"}>
        <Col xs={12}>
          {faq?.map((item) => (
            <Accordion key={item.id} title={item.question}>
              <AnswerWrapper>
                <Body dangerouslySetInnerHTML={{ __html: item.answer }} />
              </AnswerWrapper>
            </Accordion>
          ))}
        </Col>
      </Row>
      <Separator type={"section"} />
    </Grid>
  );
};
