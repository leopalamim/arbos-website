import { Body, H3, LinkStyled } from "atomic/atm.typography";
import { Hbox } from "atomic/obj.hbox/hbox.component";
import { ImageObj } from "atomic/atm.image/image-obj.component";
import { Separator } from "@atomic/atm.separator/separator.style";
import { Button } from "atomic/atm.button/button.component";
import { SideMenuBox, MenuWrapper } from "app/modules/private-area/side-menu/side-menu.component.style";
import { Routes } from "app/modules/app/routes";
import { useRouter } from "next/router";
import { ExternalLinks } from "app/modules/app/external-links";
import { SideMenuButton } from "./side-menu-button.component";
import { useAuthContext } from "@app/providers/auth.provider";
import { sideMenuItems } from "./side-menu-items";
import React from "react";
import { FaIcon } from "@atomic/atm.font-awesome";
import { Row, Col } from "react-flexbox-grid/dist/react-flexbox-grid";

export const SideMenu: React.FC = () => {
  const router = useRouter();
  const handleRoute = (route: string) => {
    router.push(route);
  };
  const { logout, username } = useAuthContext();
  return (
    <>
      <SideMenuBox>
        <MenuWrapper>
          <div>
            <Hbox>
              <Hbox.Item hAlign={"center"}>
                <Separator type={"line"} />
                <LinkStyled href={Routes.Home} as={"a"}>
                  <ImageObj.LogoArbos />
                </LinkStyled>
                <Separator type={"line"} />
                <Body>{username && `Olá, ${username}`}</Body>
              </Hbox.Item>
            </Hbox>
            <Separator type={"subsection"} />
            {sideMenuItems.map((item) => {
              return (
                <React.Fragment key={item.route}>
                  <SideMenuButton
                    route={item.route}
                    page={item.page}
                    onClick={handleRoute}
                    icon={<item.icon />}
                  />
                </React.Fragment>
              );
            })}
          </div>
          <div>
            <Row center={'xs'}>
              <Col xs={10}> 
                <Button kind={"secondary"} expanded={true} onClick={() => logout()}>
                  Logout
                </Button>
              </Col>
            </Row>
            <Separator type={"subsection"} />
            <Hbox>
              <Hbox.Item hAlign={"center"}>
                <Body>
                  Powered by{" "}
                  <LinkStyled href={ExternalLinks.Taqtile} as={"a"} target={"_blank"}>
                    Instituto Taqtile
                  </LinkStyled>
                </Body>
                <Separator type={"subsection"} />
              </Hbox.Item>
            </Hbox>
          </div>
        </MenuWrapper>
      </SideMenuBox>
    </>
  );
};
