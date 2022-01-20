export enum BrandColor {
  Green = "#578959",
  LightGreen = "#A1C4AA",
  DarkGreen = "#184047",
  Red = "#DC143C",
}

export class Color {
  public static readonly Primary = BrandColor.Green;
  public static readonly Secondary = BrandColor.LightGreen;
  public static readonly Tertiary = BrandColor.DarkGreen;
  public static readonly CallToAction = BrandColor.Red;

  public static readonly Black = "#052117";
  public static readonly White = "#FFFFFF";
  public static readonly Transparent = "transparent";
  public static readonly Accessory = "#ED991A";

  public static readonly GreenXLight = "#EEFFE7";

  public static readonly GrayXDark = "#222";
  public static readonly GrayDark = "#555";
  public static readonly Gray = "#BDBDBD";
  public static readonly GrayLight = "#F1F1F1";
  public static readonly GrayXLight = "#F9F9F9";

  public static readonly Background = "#FFFDFB";
  public static readonly DarkBackground = "#1A202C";

  public static readonly Alert = "#DC2729";
  public static readonly Warning = "#F5A623";
  public static readonly Success = "#1ABC9C";
}

export const Border = {
  Color: Color.GrayXLight,
  Width: "1px",
  Radius: "4px",
  RadiusLarge: "24px",
};

export enum Breakpoint {
  Mobile = "576px",
  Tablet = "768px",
  Desktop = "992px",
  LargeDesktop = "1200px",
}

export enum ProportionalSpacing {
  XSmall = "2%",
  Small = "5%",
  Medium = "10%",
  Large = "30%",
  XLarge = "40%",
  XXLarge = "50%",
}

export enum FontFamily {
  Primary = "Playfair Display",
  Secondary = "Crimson Pro",
  Subheading = "Inria Serif"
}

export enum FontWeight {
  Medium = 600,
  Bold = "bold",
  Regular = "Regular",
  Lighter = 300,
}

export enum FontSize {
  XXSmall = "1rem",
  XSmall = "1.2rem",
  Small = "1.4rem",
  Medium = "1.6rem",
  Large = "2rem",
  XLarge = "2.5rem",
  XXLarge = "3.5rem",
}

export const HeaderMenuHeight = "64px";

export const IconSize = 24;

export enum LineHeight {
  XSmall = "1.0rem",
  Small = "1.1rem",
  Medium = "1.5rem",
  Large = "2rem",
  XLarge = "3.5rem",
}

export enum Radius {
  XSmall = "8px",
  Small = "10px",
  Large = "20px",
}

export const Shadow =
  "0px 8px 24px rgba(0, 0, 0, 0.24), 0px 4px 8px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.08);";

export enum Spacing {
  XSmall = "4px",
  Small = "12px",
  Medium = "16px",
  Large = "24px",
  XLarge = "80px",
  XXLarge = "160px",
}

export enum Transition {
  Fast = "0.3s",
  Slow = "1s",
}

export const ThumbnailSize = {
  xsmall: { width: "24px", height: "24px" },
  small: { width: "48px", height: "48px" },
  medium: { width: "72px", height: "72px" },
  large: { width: "120px", height: "120px" },
  xlarge: { width: "160px", height: "160px" },
  rectangle: { width: "64px", height: "48px" },
  default: { width: "100%", height: "72px" },
};

export const PictureSize = {
  xsmall: { width: "320px", height: "240px" },
  small: { width: "640px", height: "480px" },
  medium: { width: "960px", height: "720px" },
  large: { width: "1280px", height: "960px" },
  xlarge: { width: "1600px", height: "1280px" },
  rectangle: { width: "400px", height: "300px" },
};

export const TransitionDuration = ".3s";

export enum ZIndex {
  Ground = 0,
  First = 1,
  Second = 2,
  Third = 3,
  Top = 4,
}

export const MAX_DESCRIPTION_LENGHT = 320;
export const MAX_TITLE_LENGHT = 50;
