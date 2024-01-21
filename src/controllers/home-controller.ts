import { ContentfulGateway } from "@/gateways/cms/contentful-gateway";
import { contentfulSettings } from "@/settings/contentful-settings";
import { getStaticPageContent } from "@/use-cases/get-staticpage-content";
import { useQuery } from "react-query";

const settings = contentfulSettings[process.env.NODE_ENV];

export const HomeController = () => {
  const getHomePageContent = async () => {
    return await getStaticPageContent(
      ContentfulGateway(),
      settings.homePageContentId
    );
  };

  const useHomePageContent = () =>
    useQuery("homePageContent", getHomePageContent);

  return {
    useHomePageContent,
  };
};
