import { DisplayStyled, Body, Enhance, Subheading, LinkStyled } from "atomic/atm.typography/typography";
import { HeroGridStyled, HeroStyled, StrongWordBoxStyled } from "app/modules/home/hero/hero.component.style";
import { Separator } from "@atomic/atm.separator";
import { Button } from "@atomic/atm.button";
import { Row, Col } from "react-flexbox-grid/dist/react-flexbox-grid";
import { ImageObj } from "@atomic/atm.image";
import { Hbox } from "@atomic/obj.hbox";
import { Link } from "react-scroll";

export const Hero: React.FC = () => (
  <>
    <HeroStyled>
      <HeroGridStyled>
        <Row middle={"xs"}>
          <Col xs={12} lg={6}>
            <DisplayStyled>
              Ser saudável nunca foi
              <StrongWordBoxStyled>tão barato e fácil</StrongWordBoxStyled>
            </DisplayStyled>
            <Subheading>Você pode comer uma salada saborosa, fresca e por um preço acessível</Subheading>
            <Separator type={"subsection"} />
            <Link to={'requestSection'} smooth>
              <Button kind={"callToAction"}>Quero ser saudável</Button>
            </Link>
          </Col>
          <Col xs={12} lg={6}>
            <Hbox>
              <Hbox.Item hAlign={"center"}>
                <ImageObj.Salad />
              </Hbox.Item>
            </Hbox>
          </Col>
        </Row>
      </HeroGridStyled>
    </HeroStyled>
  </>
);
