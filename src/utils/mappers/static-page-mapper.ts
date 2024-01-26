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
      if (contentType.startsWith("image/")) {
        return `<img src="${fields.file.url}" height="${fields.file.details.image.height}" width="${fields.file.details.image.width}" alt="${fields.description}"/>`;
      }
      return "Asset Type not supported...";
    },
    [BLOCKS.PARAGRAPH]: (node: any, next: any) =>
      `<p>${next(node.content).replace(/\n/g, "<br/>")}</p>`,
    [BLOCKS.TABLE]: (node: any, next: any) =>
      `<div class="overflow-auto p-10"><table class="table-auto w-full">${next(
        node.content
      )}</table></div>`,
    [BLOCKS.TABLE_HEADER_CELL]: (node: any, next: any) =>
      `<th class="px-6 py-2 font-medium text-left">${next(node.content)}</th>`,
    [BLOCKS.TABLE_CELL]: (node: any, next: any) =>
      `<td class="border-t border-slate-700 px-6 py-2">${next(
        node.content
      )}</td>`,
  },
};
