declare module "react-flexbox-grid/dist/react-flexbox-grid";
declare module "*.png";
declare module "*.jpg";
declare module "*.svg";
declare module "*.graphql" {
  import { DocumentNode } from "graphql";
  const value: DocumentNode;
  export default value;
}
