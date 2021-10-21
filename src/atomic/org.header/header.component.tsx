import React from "react";
import { ImageObj } from "atomic/atm.image/image-obj.component";
import { HeaderMenu, HeaderMenuWrapper } from "atomic/org.header/header.component.style";
import { Hbox } from "@atomic/obj.hbox/hbox.component";
import { useRouter } from "next/router";
import { Button } from "@atomic/atm.button";
import { useRef } from "react";
import { useState } from "react";
import { Routes } from "@app/modules/app/routes";

export const Header: React.FC = () => {
  const [menuHeight, setMenuHeight] = useState();
  const router = useRouter();
  const handleRoute = (route: string) => {
    router.push(route);
  };

  const reference = useRef(null);

  const handleMenuHeight = () => {
    setMenuHeight(reference.current.scrollHeight);
  };

  return (
    <HeaderMenuWrapper ref={reference} onMouseOver={handleMenuHeight}>
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
            <Button kind={"callToAction"}>Quero no meu condomínio</Button>
          </Hbox.Item>
        </Hbox>
      </HeaderMenu>
    </HeaderMenuWrapper>
  );
};
