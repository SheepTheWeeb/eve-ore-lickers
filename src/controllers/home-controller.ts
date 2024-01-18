import { ContentfulGateway } from "@/gateways/cms/contentful-gateway";
import { getStaticPageContent } from "@/use-cases/get-staticpage-content";
import { LOCALES } from "@/utils/constants/locales";
import { useQuery } from "react-query";

type GetStaticPageContentParams = {
  id: string;
  locale?: string;
};

export const HomeController = () => {
  const getHomePageContent = async ({ queryKey }: any) => {
    const [_, params] = queryKey;
    return await getStaticPageContent(
      ContentfulGateway(),
      params.id,
      params.locale
    );
  };

  const useHomePageContent = ({
    id,
    locale = LOCALES.DEFAULT,
  }: GetStaticPageContentParams) =>
    useQuery(["homePageContent", { id, locale }], (params) =>
      getHomePageContent(params)
    );

  return {
    useHomePageContent,
  };
};
