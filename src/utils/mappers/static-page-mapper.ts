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
    }: any) => {
      const { contentType } = fields.file;

      switch (true) {
        case contentType.startsWith("image/"):
          return `<img src="${fields.file.url}" height="${fields.file.details.image.height}" width="${fields.file.details.image.width}" alt="${fields.description}"/>`;
        default:
          return "Asset Type not supported...";
      }
    },
    [BLOCKS.PARAGRAPH]: (node: any, next: any) =>
      `<p>${next(node.content).replace(/\n/g, "<br/>")}</p>`,
    [BLOCKS.TABLE]: (node: any, next: any) =>
      `<div class="overflow-x-scroll"><table class="table-fixed w-full border-collapse">${next(
        node.content
      )}</table></div>`,
    [BLOCKS.TABLE_HEADER_CELL]: (node: any, next: any) =>
      `<th class="border-b border-slate-600 p-4 pr-8 pl-8 font-medium text-left">${next(
        node.content
      )}</th>`,
    [BLOCKS.TABLE_CELL]: (node: any, next: any) =>
      `<td class="border-b border-slate-700 p-2 pr-8 pl-8">${next(
        node.content
      )}</td>`,
  },
};
