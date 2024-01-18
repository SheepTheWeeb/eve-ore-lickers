import { StaticPageContent } from "./static-page";

export type ContentfulService = {
  getStaticPageContent(id: string, locale?: string): Promise<StaticPageContent>;
};
