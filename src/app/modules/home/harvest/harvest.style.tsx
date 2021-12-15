import styled from "styled-components";
import { Breakpoint, Color } from "@atomic/obj.constants";
import harvestImage from "assets/img/img-harvest.jpg";

export const HarvestSectionWrapper = styled.div`
  background: url(${harvestImage});
  min-height: 700px;

  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: ${Breakpoint.Desktop}) {
    background: ${Color.White};
  }
`;
