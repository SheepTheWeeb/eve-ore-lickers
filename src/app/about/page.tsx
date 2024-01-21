"use client"

import CMSImage from "@/components/common/cms-image";
import { AboutController } from "@/controllers/about-controller";
import { Alert } from "flowbite-react";
import { HiInformationCircle } from "react-icons/hi";

export default function About() {
  // TODO: try SSR this
  const { data, isLoading, error } = AboutController().useAboutPageContent();

  if (error) {
    return (
      <Alert color="failure" icon={HiInformationCircle}>
        <span className="font-medium">Error:</span>
        {" Something went wrong when fetching aboutpage data."}
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
          <CMSImage
            data={data.imageOne}
            alt="Image1"
            classes="flex justify-center"
          />
        )}
        <div className="leading-[2em] mb-10">
          <p
            className="content"
            dangerouslySetInnerHTML={{ __html: data?.contentBlock! }}
          />
        </div>
        {data?.imageTwo && (
          <CMSImage
            data={data.imageTwo}
            alt="Image2"
            classes="flex justify-center"
          />
        )}
      </div>
    </main>
  );
}
