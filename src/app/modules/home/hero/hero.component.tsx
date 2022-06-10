import {
  DisplayStyled,
  Body,
  Subheading,
  Enhance,
} from "atomic/atm.typography/typography";
import {
  HeroGridStyled,
  HeroStyled,
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
              Entregue <Enhance>saúde</Enhance> a seus clientes 🥬
            </DisplayStyled>
            <Separator type={"line"} />
            <Subheading>
              Tenha na sua loja saladas frescas, prontas para consumo e sem
              agrotóxicos
            </Subheading>
            <Separator type={"subsection"} />
            <Hbox>
              <Hbox.Item noGrow={true} vAlign={"center"}>
                <Button
                  kind={"callToAction"}
                  href={
                    "https://wa.me/5511983101691?text=Olá!%20Quero%20realizar%20uma%20compra."
                  }
                >
                  Quero fazer um pedido!
                </Button>
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
                <ImageObj.Store />
              </Hbox.Item>
            </Hbox>
          </Col>
        </Row>
        <Separator type={"subsection"} />
        <Row center={"xs"}>
          <Col xs={6} md={3}>
            <ImageObj.TruckIcon />
            <Body>
              Você recebe nossos vegetais na sua loja
            </Body>
            <Separator type={"line"} />
          </Col>
          <Col xs={6} md={3}>
            <ImageObj.SaladIcon />
            <Body>Seus clientes se alimentam de forma saudável</Body>
            <Separator type={"line"} />
          </Col>
          <Col xs={6} md={3}>
            <ImageObj.LettuceIcon />
            <Body>Nós entregramos saladas frescas e de alta qualidade</Body>
            <Separator type={"line"} />
          </Col>
        </Row>
      </HeroGridStyled>
    </HeroStyled>
  </>
);
