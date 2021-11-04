import React from "react";
import { ImageObj } from "atomic/atm.image/image-obj.component";
import { HeaderMenu, HeaderMenuWrapper, HeaderMenuDesktopWrapper } from "atomic/org.header/header.component.style";
import { Hbox } from "@atomic/obj.hbox/hbox.component";
import { useRouter } from "next/router";
import { Button } from "@atomic/atm.button";
import { Routes } from "@app/modules/app/routes";
import { Link } from "react-scroll";

export const Header: React.FC = () => {
  const router = useRouter();
  const handleRoute = (route: string) => {
    router.push(route);
  };

  return (
    <HeaderMenuWrapper>
      <HeaderMenu>
        <Hbox>
          <Hbox.Separator />
          <Hbox.Item noGrow={true} vAlign={"center"}>
            <ImageObj.LogoArbos />
          </Hbox.Item>
          <Hbox.Item noGrow={true} vAlign={"center"}>
            <Button kind={"link"} href={Routes.Home}>
              Página inicial
            </Button>
          </Hbox.Item>
          <Hbox.Item vAlign={"center"} hAlign={"flex-end"}>
            <HeaderMenuDesktopWrapper>
              <Link to={'requestHubSection'} smooth>
                <Button kind={"callToAction"} href={Routes.Home}>Quero no meu condomínio</Button>
              </Link>
            </HeaderMenuDesktopWrapper>
          </Hbox.Item>
        </Hbox>
      </HeaderMenu>
    </HeaderMenuWrapper>
  );
};
