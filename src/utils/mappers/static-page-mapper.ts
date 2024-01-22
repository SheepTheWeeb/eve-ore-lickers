import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { StaticPageContent } from "@/domain/cms/static-page";
import { mapImageType } from "./common-mapper";

export const mapStaticPageContent = (apiData: any): StaticPageContent => {
  const { title, imageOne, contentBlock, imageTwo } = apiData.fields;
  return {
    title,
    imageOne: imageOne ? mapImageType(imageOne) : undefined,
    contentBlock: documentToHtmlString(contentBlock, options),
    imageTwo: imageTwo ? mapImageType(imageTwo) : undefined,
  };
};

const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: ({
      data: {
        target: { fields },
      },
    }: any) =>
      `<img src="${fields.file.url}" height="${fields.file.details.image.height}" width="${fields.file.details.image.width}" alt="${fields.description}"/>`,
  },
};
