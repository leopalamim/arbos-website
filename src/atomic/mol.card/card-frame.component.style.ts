import styled from "styled-components";
import { Color, Border, Shadow, Spacing } from "atomic/obj.constants/constants";

export interface CardFrameStyledProps {
  paddingType?: "none" | "zero" | "small" | "large";
  noBorder?: boolean;
  hoverEffect?: boolean;
}

export const PaddingSize = {
  none: "0px",
  small: Spacing.Small,
  large: Spacing.Large,
};

export const CardFrameWrapperStyled = styled.div`
  position: relative;
`;

export const CardFrameStyled = styled.div`
  background-color: ${Color.White};
  box-shadow: ${Shadow};
  border-radius: ${(props: CardFrameStyledProps) => (props.noBorder ? "0" : Border.Radius)};

  ${(props: CardFrameStyledProps) =>
    props.paddingType == "none" &&
    `
    background-color: transparent;
    padding: 0;
    box-shadow: none;
  `}

  ${(props: CardFrameStyledProps) =>
    props.hoverEffect == true &&
    `
    &:hover {
      transform: scale(1.05);
    }
    transition: 0.3s;
  `}


  ${(props: CardFrameStyledProps) =>
    props.paddingType != "none" &&
    `
    padding: ${props.paddingType ? PaddingSize[props.paddingType] : Spacing.XSmall};
  `}

  ${(props: CardFrameStyledProps) =>
    props.paddingType == "zero" &&
    `
    background-color: ${Color.White};
    padding: 0;
    box-shadow: ${Shadow};
  `}
`;
