import { ContentfulService } from "@/domain/cms/contentful-service";
import { HomePageContent } from "@/domain/cms/home";
import { contentfulSettings } from "@/settings/contentful-settings";
import { LOCALES } from "@/utils/constants/locales";
import { mapHomePageContent } from "@/utils/mappers/homepage-mapper";
import { createClient } from "contentful";

const settings = contentfulSettings[process.env.NODE_ENV];
const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
});

const ContentfulGateway = (): ContentfulService => {
  const getHomePageContent = async (
    locale = LOCALES.DEFAULT
  ): Promise<HomePageContent> => {
    const homeResponse = await client.getEntry(settings.homePageContentId, {
      locale,
    });
    return mapHomePageContent(homeResponse);
  };

  return {
    getHomePageContent,
  };
};

export { ContentfulGateway };
