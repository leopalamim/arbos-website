import React from "react";
import { ImageObj } from "atomic/atm.image/image-obj.component";
import { HeaderMenu, HeaderMenuWrapper, HeaderMenuDesktopWrapper } from "atomic/org.header/header.component.style";
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
          <Hbox.Item vAlign={"center"} hAlign={"flex-end"}>
            <HeaderMenuDesktopWrapper>
              <Link to={"benefitsSection"} smooth>
                <Button kind={"secondary"} href={Routes.Home}>
                  Quero saber mais
                </Button>
              </Link>
            </HeaderMenuDesktopWrapper>
          </Hbox.Item>
        </Hbox>
      </HeaderMenu>
    </HeaderMenuWrapper>
  );
};
