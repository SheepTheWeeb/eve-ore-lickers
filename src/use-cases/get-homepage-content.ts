import { ContentfulService } from "@/domain/cms/contentful-service";

export const getHomePageContent = async (
  service: ContentfulService,
  locale?: string
) => {
  return await service.getHomePageContent(locale);
};
