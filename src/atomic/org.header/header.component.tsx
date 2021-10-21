import React from "react";
import { ImageObj } from "atomic/atm.image/image-obj.component";
import { HeaderMenu, HeaderMenuWrapper } from "atomic/org.header/header.component.style";
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
          <Hbox.Separator />
          <Hbox.Item noGrow={true} vAlign={"center"}>
            <Button kind={"link"} href={Routes.Home}>
              Página inicial
            </Button>
          </Hbox.Item>
          <Hbox.Item vAlign={"center"} hAlign={"flex-end"}>
            <Link to={'requestHubSection'} smooth>
              <Button kind={"callToAction"}>Quero no meu condomínio</Button>
            </Link>
          </Hbox.Item>
        </Hbox>
      </HeaderMenu>
    </HeaderMenuWrapper>
  );
};
