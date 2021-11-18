import { Hbox } from "atomic/obj.hbox/hbox.component";
import { FaIcon } from "atomic/atm.font-awesome/font-awesome.component";
import { Button } from "atomic/atm.button/button.component";
import { markSelectedMenuBasedOnRoute } from "./mark-selected-menu.util";
import { LinkStyled } from "@atomic/atm.typography";
import { SideMenuButtonWrapper } from "@app/modules/private-area/side-menu/side-menu-button.style";
import React from "react";

interface SideMenuButtonProps {
  route: string;
  page: string;
  onClick: (route: string) => void;
  icon: any;
}

export const SideMenuButton: React.FC<SideMenuButtonProps> = ({ route, page, onClick, icon }) => {
  const Wrapper = markSelectedMenuBasedOnRoute(route) ? SideMenuButtonWrapper : React.Fragment;
  console.log(icon)

  return (
    <LinkStyled as={"a"} href={route}>
      <Wrapper>
        <Hbox>
          <Hbox.Separator />
          <Hbox.Item noGrow={true} vAlign={"center"}>
            {icon}
          </Hbox.Item>
          <Hbox.Item noGrow={true} vAlign={"center"}>
            <Button kind={"link"} onClick={() => onClick(route)}>
              {page}
            </Button>
          </Hbox.Item>
        </Hbox>
      </Wrapper>
    </LinkStyled>
  );
};
