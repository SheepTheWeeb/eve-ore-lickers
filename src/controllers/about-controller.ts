import { GetStaticPageContentParams } from "@/domain/cms/static-page";
import { ContentfulGateway } from "@/gateways/cms/contentful-gateway";
import { getStaticPageContent } from "@/use-cases/get-staticpage-content";
import { LOCALES } from "@/utils/constants/locales";
import { useQuery } from "react-query";

export const AboutController = () => {
  const getAboutPageContent = async ({ queryKey }: any) => {
    const [_, params] = queryKey;
    return await getStaticPageContent(
      ContentfulGateway(),
      params.id,
      params.locale
    );
  };

  const useAboutPageContent = ({
    id,
    locale = LOCALES.DEFAULT,
  }: GetStaticPageContentParams) =>
    useQuery(["aboutPageContent", { id, locale }], (params) =>
      getAboutPageContent(params)
    );

  return {
    useAboutPageContent,
  };
};
