import { DisplayStyled, Body, Subheading } from "atomic/atm.typography/typography";
import { HeroGridStyled, HeroStyled, HeroWave, HeroWaveWrapper, StrongWordBoxStyled } from "app/modules/home/hero/hero.component.style";
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
              Sua salada.
              <StrongWordBoxStyled>Agora barata e prática.</StrongWordBoxStyled>
            </DisplayStyled>
            <Separator type={'line'} />
            <Subheading>
              Você não deveria pagar caro para se alimentar de forma saudável. Nossa tecnologia torna nossas saladas
              mais baratas para você, além de chegarem frescas e saborosas na porta da sua casa.
            </Subheading>
            <Separator type={"subsection"} />
            <Hbox>
              <Hbox.Item noGrow={true} vAlign={'center'}>
                <Link to={"requestSection"} smooth>
                  <Button kind={"callToAction"}>Quero ser saudável</Button>
                </Link>
              </Hbox.Item>
              <Hbox.Separator />
              <Hbox.Item noGrow={true} hAlign={'flex-start'} vAlign={'center'}>
                <Body>ou</Body>
              </Hbox.Item>
              <Hbox.Separator />
              <Hbox.Item noGrow={true} hAlign={'flex-start'} vAlign={'center'}>
                <Link to={"howItWorksSection"} smooth>
                  <Button kind={"primary"} variant={"link"}>
                    quero saber mais
                  </Button>
                </Link>
              </Hbox.Item>
            </Hbox>
            <Separator type={'line'} />
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
            <Body>Você recebe suas saladas na porta de casa</Body>
          </Col>
          <Col xs={4}>
            <ImageObj.CoinsIcon />
            <Body>Não pague mais de R$20,00 em uma salada</Body>
          </Col>
          <Col xs={4}>
            <ImageObj.LettuceIcon />
            <Body>As nossas folhosas são plantadas aqui no bairro</Body>
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
