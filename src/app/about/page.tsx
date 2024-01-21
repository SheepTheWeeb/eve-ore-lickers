import CMSImage from "@/components/common/cms-image";
import ErrorMessage from "@/components/common/error-message";
import Loading from "@/components/common/loading";
import { AboutController } from "@/controllers/about-controller";
import { Suspense } from "react";

export default async function About() {
  const aboutContent = await AboutController().getAboutPageContent();

  try {
    return (
      <main className="flex flex-col">
        <Suspense fallback={<Loading />}>
          <div>
            <div className="pb-5">
              <h1>{aboutContent.title}</h1>
            </div>
            {aboutContent?.imageOne && (
              <CMSImage
                data={aboutContent.imageOne}
                alt="Image1"
                classes="flex justify-center"
              />
            )}
            <div className="leading-[2em] mb-10">
              <div
                className="content"
                dangerouslySetInnerHTML={{ __html: aboutContent.contentBlock }}
              />
            </div>
            {aboutContent?.imageTwo && (
              <CMSImage
                data={aboutContent.imageTwo}
                alt="Image2"
                classes="flex justify-center"
              />
            )}
          </div>
        </Suspense>
      </main>
    );
  } catch (error) {
    return (
      <ErrorMessage message="Something went wrong when fetching aboutpage data." />
    );
  }
}
