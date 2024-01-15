import { HomePageContent } from "./home";

export type ContentfulService = {
  getHomePageContent(locale?: string): Promise<HomePageContent>;
};
