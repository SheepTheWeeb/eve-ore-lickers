import { ContentfulService } from "@/domain/cms/contentful-service";

export const getStaticPageContent = async (
  service: ContentfulService,
  id: string,
  locale?: string
) => {
  return await service.getStaticPageContent(id, locale);
};
