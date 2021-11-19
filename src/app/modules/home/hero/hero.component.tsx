import { DisplayStyled, Body, Enhance } from "atomic/atm.typography/typography";
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
              Tenha vegetais frescos
              <StrongWordBoxStyled>dentro do seu condomínio</StrongWordBoxStyled>
            </DisplayStyled>
            <Separator type={"line"} />
            <Body>
              Com a Arbos, você pode descer uns lances de escada e colher vegetais hidropônicos dentro do seu
              condomínio
            </Body>
            <Separator type={"subsection"} />
            <Link to={"requestHubSection"} smooth>
              <Button kind={"callToAction"}>Quero no meu condomínio</Button>
            </Link>
          </Col>
          <Col xs={6}>
            <OnlyDesktop>
              <ImageObj.HubFull />
            </OnlyDesktop>
          </Col>
        </Row>
      </HeroGridStyled>
    </HeroStyled>
    <Separator type={"subsection"} />
  </>
);
