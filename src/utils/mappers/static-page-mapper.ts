import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { StaticPageContent } from "@/domain/cms/static-page";
import { mapImageType } from "./common-mapper";

export const mapStaticPageContent = (apiData: any): StaticPageContent => {
  const { title, imageOne, contentBlock, imageTwo } = apiData.fields;
  return {
    title,
    imageOne: imageOne ? mapImageType(imageOne) : undefined,
    contentBlock: documentToHtmlString(contentBlock),
    imageTwo: imageTwo ? mapImageType(imageTwo) : undefined,
  };
};
