import { HomePageContent } from "@/domain/cms/home";

export const mapHomePageContent = (apiData: any): HomePageContent => {
  // TODO: remove console log
  console.log(apiData);
  const { title, logo } = apiData.fields;

  return {
    title,
    homeText: "TODO:",
    image: {
      desktop: {
        url: `https:${logo.fields.file.url}`,
        width: logo.fields.file.details.image.width,
        height: logo.fields.file.details.image.height,
      },
      mobile: {
        url: `https:${logo.fields.file.url}`,
        width: logo.fields.file.details.image.width,
        height: logo.fields.file.details.image.height,
      },
    },
  };
};
