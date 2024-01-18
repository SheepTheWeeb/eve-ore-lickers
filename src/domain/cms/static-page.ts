import { CMSImage } from "./common";

export type StaticPageContent = {
  title: string;
  imageOne?: CMSImage;
  contentBlock: string;
  imageTwo?: CMSImage;
};
