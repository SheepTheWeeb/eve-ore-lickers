import { CMSImage, ImageType } from "@/domain/cms/common";

export const mapCMSImage = (apiData: any): CMSImage => {
  // TODO: Map new ContentType image object
  return {
    desktop: mapImageType(apiData),
    mobile: mapImageType(apiData),
  };
};

export const mapImageType = (apiData: any): ImageType => {
  const { file } = apiData.fields;
  return {
    url: `https:${file.url}`,
    width: file.details.image.width,
    height: file.details.image.height,
  };
};
