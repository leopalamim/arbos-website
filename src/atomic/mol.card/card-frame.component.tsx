import {
  CardFrameStyled,
  CardFrameStyledProps,
  CardFrameWrapperStyled,
} from "./card-frame.component.style";
import React from "react";

export const CardFrame: React.FC<CardFrameStyledProps> = (props) => {
  return (
    <CardFrameWrapperStyled>
      {props.paddingType == "none" && props.children}
      {props.paddingType != "none" && (
        <CardFrameStyled paddingType={props.paddingType} noBorder={props.noBorder}>
          {props.children}
        </CardFrameStyled>
      )}
    </CardFrameWrapperStyled>
  );
};
