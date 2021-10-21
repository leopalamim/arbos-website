import React from "react";
import { Hbox } from "atomic/obj.hbox/hbox.component";
import { ImageIcon, ImageObj } from "atomic/atm.image";
import { Separator } from "@atomic/atm.separator/separator.style";
import { BodySecondary, H3, LinkStyled } from "atomic/atm.typography";
import { FooterWrapperStyled } from "@atomic/org.footer/footer.component.style";
import { Grid } from "atomic/obj.grid/grid";
import { Row, Col } from "react-flexbox-grid/dist/react-flexbox-grid";
import { ExternalLinks } from "app/modules/app/external-links";
import { Routes } from "@app/modules/app/routes";
import { Button } from "@atomic/atm.button";

export const Footer: React.FC = () => {
  return (
    <FooterWrapperStyled>
      <Grid>
        <Row center={"xs"} start={"md"}>
          <Col xs={12} sm={12} md={2}>
            <ImageObj.LogoArbos />
          </Col>
          <Col xs={12} sm={12} md={3}>
            <H3>Institucional</H3>
            <Button variant={'link'} href={Routes.Faq}>
              Perguntas frequentes
            </Button>
          </Col>
          <Col xs={12} sm={12} md={5}>
            <H3>Fale conosco</H3>
            <Row center={'xs'} start={'md'}>
              <Col>
                <Hbox>
                  <Hbox.Item noGrow={true} vAlign={"center"}>
                    <ImageIcon.Location />
                  </Hbox.Item>
                  <Hbox.Separator />
                  <Hbox.Item>
                    <BodySecondary>Av. Doutor Arnaldo, 2194 - Sumaré, São Paulo - SP, 01255-000</BodySecondary>
                  </Hbox.Item>
                </Hbox>
                <Separator />
                <Hbox>
                  <Hbox.Item noGrow={true} vAlign={"center"}>
                    <ImageIcon.Mail />
                  </Hbox.Item>
                  <Hbox.Separator />
                  <Hbox.Item>
                    <LinkStyled href={"mailto:contato@poliangels.com.br"}>
                      <BodySecondary as={"a"}>contato@arbosfood.com.br</BodySecondary>
                    </LinkStyled>
                  </Hbox.Item>
                </Hbox>
              </Col>
            </Row>
            <Separator type={"subsection"} />
          </Col>
          <Col xs={12} sm={12} md={2}>
            <H3>Redes sociais</H3>
            <Row center={'xs'} start={'md'}>
              <Col>
                <Hbox>
                  <Hbox.Item noGrow={true}>
                    <LinkStyled href={ExternalLinks.Instagram} as={"a"} target={"_blank"}>
                      <ImageIcon.Instagram />
                    </LinkStyled>
                  </Hbox.Item>
                  <Hbox.Separator />
                  <Hbox.Item noGrow={true}>
                    <LinkStyled href={ExternalLinks.Linkedin} as={"a"} target={"_blank"}>
                      <ImageIcon.Linkedin />
                    </LinkStyled>
                  </Hbox.Item>
                  <Hbox.Separator />
                </Hbox>
              </Col>
            </Row>
            <Separator type={"subsection"} />
          </Col>
        </Row>
        <Row center={"xs"}>
          <Col>
            <BodySecondary>
              Desenvolvido por{" "}
              <LinkStyled href={ExternalLinks.Taqtile} as={"a"} target={"_blank"}>
                Instituto Taqtile
              </LinkStyled>{" "}
              @2021
            </BodySecondary>
          </Col>
        </Row>
      </Grid>
    </FooterWrapperStyled>
  );
};
