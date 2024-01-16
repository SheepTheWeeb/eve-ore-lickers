"use client";

import { HomeController } from "@/controllers/home-controller";
import Image from "next/image";

export default function Home() {
  const { data, isLoading } = HomeController().useHomePageContent();

  return (
    <main className="flex flex-col items-center p-24">
      {isLoading || !data ? (
        <p>Loading...</p>
      ) : (
        <div>
          <div className="pb-5">
            <h1>{data.title}</h1>
          </div>
          <div className="leading-[2em] mb-10">
            <p dangerouslySetInnerHTML={{ __html: data.homeText }} />
          </div>
          <div className="flex justify-center">
            <Image
              src={data.image.desktop.url}
              alt="logo"
              width={200}
              height={200}
              priority
            />
          </div>
        </div>
      )}
    </main>
  );
}
