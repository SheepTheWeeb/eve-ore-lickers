import { ContentfulGateway } from "@/gateways/cms/contentful-gateway";
import { contentfulSettings } from "@/settings/contentful-settings";
import { getStaticPageContent } from "@/use-cases/get-static-page-content";

const settings = contentfulSettings[process.env.NODE_ENV];

export const AboutController = () => {
  const getAboutPageContent = async () => {
    return await getStaticPageContent(
      ContentfulGateway(),
      settings.aboutUsContentId
    );
  };

  return {
    getAboutPageContent,
  };
};
