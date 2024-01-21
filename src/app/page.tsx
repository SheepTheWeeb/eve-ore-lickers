import CMSImage from "@/components/common/cms-image";
import ErrorMessage from "@/components/common/error-message";
import Loading from "@/components/common/loading";
import { HomeController } from "@/controllers/home-controller";
import { Suspense } from "react";

export default async function Home() {
  try {
    const homeContent = await HomeController().getHomePageContent();

    return (
      <main className="flex flex-col">
        <Suspense fallback={<Loading />}>
          <div>
            <div className="pb-5">
              <h1>{homeContent.title}</h1>
            </div>
            {homeContent?.imageOne && (
              <CMSImage
                data={homeContent.imageOne}
                alt="Image1"
                classes="flex justify-center"
              />
            )}
            <div className="leading-[2em] mb-10">
              <div
                className="content"
                dangerouslySetInnerHTML={{ __html: homeContent.contentBlock }}
              />
            </div>
            {homeContent?.imageTwo && (
              <CMSImage
                data={homeContent.imageTwo}
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
      <ErrorMessage message="Something went wrong when fetching homepage data." />
    );
  }
}
