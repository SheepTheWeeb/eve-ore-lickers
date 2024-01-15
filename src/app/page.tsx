import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center p-24">
      <div className="pb-5">
        <h1>Welcome to Ore Lickers!</h1>
      </div>
      <div>
        <Image
          src="https://images.evetech.net/corporations/98737160/logo"
          alt="logo"
          width={180}
          height={37}
          priority
        />
      </div>
    </main>
  );
}
