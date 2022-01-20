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
              Saudável.
              <StrongWordBoxStyled>Barato. Prático.</StrongWordBoxStyled>
            </DisplayStyled>
            <Subheading>Você pode comer uma salada saborosa, fresca e por um preço acessível</Subheading>
            <Separator type={"subsection"} />
            <Link to={"requestSection"} smooth>
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
        <Separator type={"subsection"} />
        <Row center={"xs"}>
          <Col xs={4}>
            <ImageObj.TruckIcon />
            <Body>Você recebe as saladas em casa</Body>
          </Col>
          <Col xs={4}>
            <ImageObj.CoinsIcon />
            <Body>Nunca mais pague mais de R$20,00 em uma salada</Body>
          </Col>
          <Col xs={4}>
            <ImageObj.LettuceIcon />
            <Body>As nossas folhosas são plantadas aqui no bairro</Body>
          </Col>
        </Row>
      </HeroGridStyled>
    </HeroStyled>
  </>
);
