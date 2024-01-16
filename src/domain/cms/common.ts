export type CMSImage = {
  desktop: ImageType;
  mobile: ImageType;
};

type ImageType = {
  url: string;
  width: number;
  height: number;
};
