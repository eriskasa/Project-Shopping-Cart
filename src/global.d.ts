declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.gif";
declare module "*.svg";

declare module "*.svg" {
  import { ReactComponent as ReactComponent } from 'react';
  export default ReactComponent;
}