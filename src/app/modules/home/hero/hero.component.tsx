import { DisplayStyled, Body, Subheading } from "atomic/atm.typography/typography";
import {
  HeroGridStyled,
  HeroStyled,
  HeroWave,
  HeroWaveWrapper,
  StrongWordBoxStyled,
} from "app/modules/home/hero/hero.component.style";
import { Separator } from "@atomic/atm.separator";
import { Button } from "@atomic/atm.button";
import { Row, Col } from "react-flexbox-grid/dist/react-flexbox-grid";
import { ImageObj } from "@atomic/atm.image";
import { Hbox } from "@atomic/obj.hbox";
import { Link } from "react-scroll";
import { OnlyDesktop } from "@atomic/obj.grid";

export const Hero: React.FC = () => (
  <>
    <HeroStyled>
      <HeroGridStyled>
        <Row middle={"xs"}>
          <Col xs={12} lg={6}>
            <DisplayStyled>
              Suas refeições saudáveis
              <StrongWordBoxStyled>sem sair de casa</StrongWordBoxStyled>
            </DisplayStyled>
            <Separator type={"line"} />
            <Subheading>Nossas folhas são entregues frescas e por um preço justo, na sua casa ou trabalho</Subheading>
            <Separator type={"subsection"} />
            <Hbox>
              <Hbox.Item noGrow={true} vAlign={"center"}>
                <Button kind={"callToAction"} href={"https://wa.me/5511934622206?text=Olá!%20Quero%20realizar%20uma%20compra."}>Experimente agora!</Button>
              </Hbox.Item>
              <Hbox.Separator />
              <Hbox.Item noGrow={true} hAlign={"flex-start"} vAlign={"center"}>
                <Body>ou</Body>
              </Hbox.Item>
              <Hbox.Separator />
              <Hbox.Item noGrow={true} hAlign={"flex-start"} vAlign={"center"}>
                <Link to={"howItWorksSection"} smooth>
                  <Button kind={"primary"} variant={"link"}>
                    saiba mais
                  </Button>
                </Link>
              </Hbox.Item>
            </Hbox>
            <Separator type={"line"} />
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
          <Col xs={6} md={3}>
            <ImageObj.TruckIcon />
            <Body>Você recebe seus vegetais na porta de casa ou no trabalho</Body>
            <Separator type={"line"} />
          </Col>
          <Col xs={6} md={3}>
            <ImageObj.CoinsIcon />
            <Body>Se alimente de forma saudável por um preço justo</Body>
            <Separator type={"line"} />
          </Col>
          <Col xs={6} md={3}>
            <ImageObj.SaladIcon />
            <Body>Economize comprando mixes para a semana toda</Body>
            <Separator type={"line"} />
          </Col>
          <Col xs={6} md={3}>
            <ImageObj.LettuceIcon />
            <Body>Nossas folhas são frescas e de alta qualidade</Body>
            <Separator type={"line"} />
          </Col>
        </Row>
      </HeroGridStyled>
    </HeroStyled>
    <OnlyDesktop>
      <HeroWaveWrapper>
        <HeroWave />
      </HeroWaveWrapper>
    </OnlyDesktop>
  </>
);
