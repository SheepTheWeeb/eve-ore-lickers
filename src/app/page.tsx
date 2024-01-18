"use client";

import { HomeController } from "@/controllers/home-controller";
import Image from "next/image";
import { contentfulSettings } from "@/settings/contentful-settings";
import { Alert } from "flowbite-react";
import { HiInformationCircle } from "react-icons/hi";

const settings = contentfulSettings[process.env.NODE_ENV];

export default function Home() {
  const { data, isLoading, error } = HomeController().useHomePageContent({
    id: settings.homePageContentId,
  });

  if (error) {
    return (
      <Alert color="failure" icon={HiInformationCircle}>
        <span className="font-medium">Error:</span>
        {" Something went wrong when fetching homepage data."}
      </Alert>
    );
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <main className="flex flex-col">
      <div>
        <div className="pb-5">
          <h1>{data?.title}</h1>
        </div>
        {data?.imageOne && (
          <div className="flex justify-center pb-5">
            <Image
              src={data.imageOne.desktop.url}
              alt="image1"
              width={data.imageOne.desktop.width}
              height={data.imageOne.desktop.height}
              priority
            />
          </div>
        )}
        <div className="leading-[2em] mb-10">
          <p
            className="content"
            dangerouslySetInnerHTML={{ __html: data?.contentBlock! }}
          />
        </div>
        {data?.imageTwo && (
          <div className="flex justify-center">
            <Image
              src={data.imageTwo.desktop.url}
              alt="image2"
              width={data.imageTwo.desktop.width}
              height={data.imageTwo.desktop.height}
              priority
            />
          </div>
        )}
      </div>
    </main>
  );
}
