import { ContentfulGateway } from "@/gateways/cms/contentful-gateway";
import { getHomePageContent as getHomePageContentUseCase } from "@/use-cases/get-homepage-content";
import { LOCALES } from "@/utils/constants/locales";
import { useQuery } from "react-query";

export const HomeController = () => {
  const getHomePageContent = async ({ queryKey }: any) => {
    const [_, locale] = queryKey;
    return await getHomePageContentUseCase(ContentfulGateway(), locale);
  };

  const useHomePageContent = (locale = LOCALES.DEFAULT) =>
    useQuery(["homePageContent", locale], (locale) =>
      getHomePageContent(locale)
    );

  return {
    useHomePageContent,
  };
};
