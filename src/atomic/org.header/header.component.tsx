import React from "react";
import { ImageObj } from "atomic/atm.image/image-obj.component";
import { HeaderMenu, HeaderMenuWrapper } from "atomic/org.header/header.component.style";
import { Hbox } from "@atomic/obj.hbox/hbox.component";
import { Button } from "@atomic/atm.button";
import { Routes } from "@app/modules/app/routes";
import { Link } from "react-scroll";

export const Header: React.FC = () => {
  return (
    <HeaderMenuWrapper>
      <HeaderMenu>
        <Hbox>
          <Hbox.Separator />
          <Hbox.Item noGrow={true} vAlign={"center"}>
            <ImageObj.LogoArbos />
          </Hbox.Item>
          <Hbox.Separator />
          <Hbox.Item noGrow={true} vAlign={"center"} hAlign={"flex-start"}>
            <Button kind={"primary"} variant={"link"} href={Routes.Home}>
              Início
            </Button>
          </Hbox.Item>
          <Hbox.Separator />
          <Hbox.Item noGrow={true} vAlign={"center"} hAlign={"flex-start"}>
            <Button kind={"primary"} variant={"link"} href={Routes.Institutional.Faq}>
              Perguntas frequentes
            </Button>
          </Hbox.Item>
        </Hbox>
      </HeaderMenu>
    </HeaderMenuWrapper>
  );
};
