import { ContentfulGateway } from "@/gateways/cms/contentful-gateway";
import { contentfulSettings } from "@/settings/contentful-settings";
import { getStaticPageContent } from "@/use-cases/get-staticpage-content";
import { useQuery } from "react-query";

const settings = contentfulSettings[process.env.NODE_ENV];

export const AboutController = () => {
  const getAboutPageContent = async () => {
    return await getStaticPageContent(
      ContentfulGateway(),
      settings.aboutUsContentId
    );
  };

  const useAboutPageContent = () =>
    useQuery("aboutPageContent", getAboutPageContent);

  return {
    useAboutPageContent,
  };
};
