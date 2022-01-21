import styled from "styled-components";
import { Color, Breakpoint, Spacing } from "atomic/obj.constants/constants";
import { Grid } from "atomic/obj.grid/grid";
import heroImage from "assets/img/img-hero3.png";
import { DisplayStyled, Subheading } from "atomic/atm.typography/typography";

export const HeroStyled = styled.div`
  margin-top: ${Spacing.XXLarge};

  @media (min-width: ${Breakpoint.Desktop}) {
    background: ${Color.GrayXLight};
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

export const HeroWaveWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100px;
  padding-top: 100px;
  background: ${Color.GrayXLight};
`;

export const HeroWave = styled.div`
  position: absolute;
  height: 250px;
  width: 100%;
  bottom: 0;
  text-align: center;

  &::before {
    content: "";
    display: block;
    position: absolute;
    border-radius: 100% 50%;
    width: 55%;
    height: 100%;
    transform: translate(85%, 60%);
    background-color: ${Color.Background};
  }

  &::after {
    content: "";
    display: block;
    position: absolute;
    border-radius: 100% 50%;
    width: 55%;
    height: 100%;
    background-color: ${Color.GrayXLight};
    transform: translate(-4%, 40%);
    z-index: -1;
  }
`;
