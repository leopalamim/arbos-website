import styled from "styled-components";
import { Color, Breakpoint } from "atomic/obj.constants/constants";
import { Grid } from "atomic/obj.grid/grid";
import heroImage from "assets/img/img-hero.png";
import heroImageMobile from "assets/img/img-hero-mobile.jpg";
import { Body, DisplayStyled } from "atomic/atm.typography/typography";

export const HeroStyled = styled.div`
  margin-top: 0px;
  height: 100vh;
  background: ${Color.Background} center center no-repeat;

  @media (max-width: ${Breakpoint.Desktop}) {
    background: ${Color.White} url(${heroImageMobile}) center center no-repeat;
    background-size: cover;

    & ${Body} {
      color: ${Color.White};
    }

    & ${DisplayStyled} {
      color: ${Color.White};
    }
  }

  & img {
    max-width: 100%;
  }
`;

export const HeroGridStyled = styled(Grid)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
`;

export const StrongWordBoxStyled = styled.div`
  color: ${Color.Secondary};
  min-height: 6rem;
  width: 100%;

  @media (max-width: ${Breakpoint.Desktop}) {
    color: ${Color.White};
  }
`;
