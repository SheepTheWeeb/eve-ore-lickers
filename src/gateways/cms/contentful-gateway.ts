import { ContentfulService } from "@/domain/cms/contentful-service";
import { StaticPageContent } from "@/domain/cms/static-page";
import { LOCALES } from "@/utils/constants/locales";
import { mapStaticPageContent } from "@/utils/mappers/staticpage-mapper";
import { createClient } from "contentful";

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
});

const ContentfulGateway = (): ContentfulService => {
  const getStaticPageContent = async (
    id: string,
    locale = LOCALES.DEFAULT
  ): Promise<StaticPageContent> => {
    const homeResponse = await client.getEntry(id, {
      locale,
    });
    return mapStaticPageContent(homeResponse);
  };

  return {
    getStaticPageContent,
  };
};

export { ContentfulGateway };
