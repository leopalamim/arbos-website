import { MobileMenu } from "@atomic/org.mobile-nav-menu";
import { Hbox } from "atomic/obj.hbox/hbox.component";
import { LineSeparator, Separator } from "@atomic/atm.separator/separator.style";
import { Body, LinkStyled } from "atomic/atm.typography";
import { Button } from "atomic/atm.button/button.component";
import React, { useState } from "react";
import { Routes } from "app/modules/app/routes";
import { useRouter } from "next/router";
import { ExternalLinks } from "app/modules/app/external-links";
import { useAuthContext } from "@app/providers/auth.provider";
import { sideMenuItems } from "@app/modules/private-area/side-menu/side-menu-items";
import { SideMenuButton } from "../side-menu/side-menu-button.component";

export const MobilePrivateMenu: React.FC = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const router = useRouter();
  const handleRoute = (route) => {
    router.push(route);
    setMenuOpened(!menuOpened);
  };
  const { logout, username } = useAuthContext();

  return (
    <MobileMenu menuOpened={menuOpened} toggleMenu={() => setMenuOpened(!menuOpened)} isLogged={true}>
      <Hbox>
        <Hbox.Item hAlign={"center"}>
          <Separator type={"subsection"} />
          <Body>{username && `Olá, ${username}`}</Body>
        </Hbox.Item>
      </Hbox>
      <Separator type={"subsection"} />
      {sideMenuItems.map((item) => {
        return (
          <React.Fragment key={item.route}>
            <SideMenuButton route={item.route} page={item.page} onClick={handleRoute} icon={<item.icon />} />
            <Separator type={"line"} />
          </React.Fragment>
        );
      })}
      <Separator type={"line"} />
      <Button kind={"secondary"} expanded={true} onClick={() => logout()}>
        Logout
      </Button>
      <Separator type={"subsection"} />
      <Hbox>
        <Hbox.Item hAlign={"center"}>
          <Body>
            Powered by{" "}
            <LinkStyled href={ExternalLinks.Taqtile} as={"a"} target={"_blank"}>
              Instituto Taqtile
            </LinkStyled>
          </Body>
          <Separator type={"line"} />
        </Hbox.Item>
      </Hbox>
    </MobileMenu>
  );
};
