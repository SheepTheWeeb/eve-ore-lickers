import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { HomePageContent } from "@/domain/cms/home";
import { mapCMSImage } from "./common-mapper";

export const mapHomePageContent = (apiData: any): HomePageContent => {
  const { title, homeText, logo } = apiData.fields;
  return {
    title,
    homeText: documentToHtmlString(homeText),
    image: mapCMSImage(logo),
  };
};
