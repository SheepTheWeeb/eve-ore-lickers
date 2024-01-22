"use client";

import ErrorMessage from "@/components/common/error-message";
import Loading from "@/components/common/loading";
import { HomeController } from "@/controllers/home-controller";
import Image from "next/image";

export default function Home() {
  const { data, isLoading, error } = HomeController().useHomePageContent();
  if (error) {
    return (
      <ErrorMessage message="Something went wrong when fetching homepage data." />
    );
  }
  if (isLoading) {
    return <Loading />;
  }

  return (
    <main className="flex flex-col">
      <div className="pb-5">
        <h1>{data?.title}</h1>
      </div>
      {data?.imageOne && (
        <div className="flex justify-center">
          <Image
            src={data.imageOne.url}
            alt="Image1"
            width={data.imageOne.width}
            height={data.imageOne.height}
          />
        </div>
      )}
      <div className="leading-[2em] mb-10">
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: data?.contentBlock! }}
        />
      </div>
      {data?.imageTwo && (
        <div className="flex justify-center">
          <Image
            src={data.imageTwo.url}
            alt="Image2"
            width={data.imageTwo.width}
            height={data.imageTwo.height}
          />
        </div>
      )}
    </main>
  );
}
