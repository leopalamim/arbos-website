import styled from "styled-components";

import "react-flexbox-grid/dist/react-flexbox-grid.css";
import { Col as FlexCol, Grid as FlexGrid } from "react-flexbox-grid/dist/react-flexbox-grid";
import { Breakpoint } from "@atomic/obj.constants";

interface ColProps {
  hAlign?: string;
}

export const Col = styled(FlexCol)`
  ${(props: ColProps) => (props.hAlign ? `text-align: ${props.hAlign}` : "")};
`;

export const Grid = styled(FlexGrid)`
  padding: 0 32px;
`;
export const ColumnSideMenu = styled.div`
  width: 0;

  @media (min-width: ${Breakpoint.Desktop}) {
    width: 20vw;
    margin: 0;
    padding: 0;
  }
`;

export const ColumnComponents = styled.div`
  width: 100vw;
  @media (min-width: ${Breakpoint.Desktop}) {
    width: 80vw;
    margin: 0;
    padding: 0;
  }
`;

export const WrapperPage = styled.div`
  display: flex;
  margin: 0;
  padding: 0;
`;

export const OnlyDesktop = styled.div`
  @media (max-width: ${Breakpoint.Desktop}) {
    display: none;
  }
`;
