import { CMSImage } from "@/domain/cms/common";

export const mapCMSImage = (apiData: any): CMSImage => {
  const { file } = apiData.fields;
  return {
    desktop: {
      url: `https:${file.url}`,
      width: file.details.image.width,
      height: file.details.image.height,
    },
    mobile: {
      url: `https:${file.url}`,
      width: file.details.image.width,
      height: file.details.image.height,
    },
  };
};
