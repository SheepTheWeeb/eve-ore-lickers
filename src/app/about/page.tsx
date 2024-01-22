import ErrorMessage from "@/components/common/error-message";
import Loading from "@/components/common/loading";
import Image from "next/image";
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
              <div className="flex justify-center">
                <Image
                  src={aboutContent.imageOne.url}
                  alt="Image1"
                  width={aboutContent.imageOne.width}
                  height={aboutContent.imageOne.height}
                />
              </div>
            )}
            <div className="leading-[2em] mb-10">
              <div
                className="content"
                dangerouslySetInnerHTML={{ __html: aboutContent.contentBlock }}
              />
            </div>
            {aboutContent?.imageTwo && (
              <div className="flex justify-center">
                <Image
                  src={aboutContent.imageTwo.url}
                  alt="Image2"
                  width={aboutContent.imageTwo.width}
                  height={aboutContent.imageTwo.height}
                />
              </div>
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
