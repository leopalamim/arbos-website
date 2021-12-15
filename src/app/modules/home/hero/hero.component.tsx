import { DisplayStyled, Body, Enhance, Subheading } from "atomic/atm.typography/typography";
import { HeroGridStyled, HeroStyled, StrongWordBoxStyled } from "app/modules/home/hero/hero.component.style";
import { Separator } from "@atomic/atm.separator";
import { Button } from "@atomic/atm.button";
import { Row, Col } from "react-flexbox-grid/dist/react-flexbox-grid";
import { Link } from "react-scroll";
import { ImageObj } from "@atomic/atm.image";
import { OnlyDesktop } from "@atomic/obj.grid";

export const Hero: React.FC = () => (
  <>
    <HeroStyled>
      <HeroGridStyled>
        <Row middle={'xs'}>
          <Col xs={12} lg={6}>
            <DisplayStyled>
              Vegetais frescos
              <StrongWordBoxStyled>dentro do condomínio</StrongWordBoxStyled>
            </DisplayStyled>
            <Separator type={"line"} />
            <Subheading>
              Experimente a qualidade do alimento cultivado no seu bairro
            </Subheading>
            <Separator type={"subsection"} />
            <Link to={"requestHubSection"} smooth>
              <Button kind={"callToAction"}>Quero no meu condomínio</Button>
            </Link>
          </Col>
        </Row>
      </HeroGridStyled>
    </HeroStyled>
  </>
);
