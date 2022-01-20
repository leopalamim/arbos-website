import { Row, Col } from "react-flexbox-grid/dist/react-flexbox-grid";
import { Grid, OnlyDesktop } from "atomic/obj.grid/grid";
import { Separator } from "@atomic/atm.separator/separator.style";
import { RequestForm } from "@app/modules/home/request/request-form.component";
import { Body, H2, DisplayStyled, LinkStyled } from "atomic/atm.typography/typography";
import React from "react";
import { ImageIcon, ImageObj } from "@atomic/atm.image";
import { Hbox } from "@atomic/obj.hbox";
import { ExternalLinks } from "@app/modules/app/external-links";

export const RequestSection: React.FC = () => (
  <Grid>
    <OnlyDesktop>
      <Separator type={"subsection"} />
    </OnlyDesktop>
    <Row start={"lg"} middle={"xs"}>
      <Col xs={12} lg={6}>
        <DisplayStyled>Em breve estaremos entregando!</DisplayStyled>
        <Separator type={"line"} />
        <Body>Preecha seu email e receba atualizações da Arbos.</Body>
        <Separator type={"line"} />
        <RequestForm />
        <Hbox>
          <Hbox.Item noGrow={true}>
            <LinkStyled href={ExternalLinks.Instagram} as={"a"} target={"_blank"}>
              <ImageIcon.InstagramColored />
            </LinkStyled>
          </Hbox.Item>
          <Hbox.Separator />
          <Hbox.Item noGrow={true}>
            <LinkStyled href={ExternalLinks.Linkedin} as={"a"} target={"_blank"}>
              <ImageIcon.LinkedinColored />
            </LinkStyled>
          </Hbox.Item>
          <Hbox.Separator />
        </Hbox>
      </Col>
      <Col xs={12} lg={6}>
        <Hbox>
          <Hbox.Item hAlign={"center"}>
            <ImageObj.Lettuce />
          </Hbox.Item>
        </Hbox>
      </Col>
    </Row>
    <Separator type={"section"} />
  </Grid>
);
