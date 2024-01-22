import ErrorMessage from "@/components/common/error-message";
import Loading from "@/components/common/loading";
import { HomeController } from "@/controllers/home-controller";
import Image from "next/image";
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
              <div className="flex justify-center">
                <Image
                  src={homeContent.imageOne.url}
                  alt="Image1"
                  width={homeContent.imageOne.width}
                  height={homeContent.imageOne.height}
                />
              </div>
            )}
            <div className="leading-[2em] mb-10">
              <div
                className="content"
                dangerouslySetInnerHTML={{ __html: homeContent.contentBlock }}
              />
            </div>
            {homeContent?.imageTwo && (
              <div className="flex justify-center">
                <Image
                  src={homeContent.imageTwo.url}
                  alt="Image2"
                  width={homeContent.imageTwo.width}
                  height={homeContent.imageTwo.height}
                />
              </div>
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
