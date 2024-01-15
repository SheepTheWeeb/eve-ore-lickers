import { HomePageContent } from "@/domain/cms/home";

export const mapHomePageContent = (apiData: any): HomePageContent => {
  // TODO: implement mapper
  console.log(apiData);
  return {
    title: "",
    homeText: "",
    image: {
      desktopUrl: "",
      mobileUrl: "",
    },
  };
};
