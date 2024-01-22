import { ImageType } from "./common";

export type StaticPageContent = {
  title: string;
  imageOne?: ImageType;
  contentBlock: string;
  imageTwo?: ImageType;
};

export type GetStaticPageContentParams = {
  id: string;
  locale?: string;
};
