import styled from "styled-components";
import { Color, Breakpoint, Spacing } from "atomic/obj.constants/constants";
import { Grid } from "atomic/obj.grid/grid";
import heroImage from "assets/img/img-hero3.png";
import { DisplayStyled, Subheading } from "atomic/atm.typography/typography";

export const HeroStyled = styled.div`
  margin-top: ${Spacing.XXLarge};

  @media (min-width: ${Breakpoint.Desktop}) {
    background-image: linear-gradient(${Color.LightBlue}, ${Color.Background});
    height: 100vh;
    margin-top: 0px;
  }
`;

export const HeroGridStyled = styled(Grid)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const StrongWordBoxStyled = styled.div`
  color: ${Color.Primary};
  min-height: 6rem;
  width: 100%;
`;
