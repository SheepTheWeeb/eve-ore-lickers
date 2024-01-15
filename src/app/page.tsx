import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col items-center p-24">
      <div className="pb-5">
        <h1>Welcome to Ore Lickers!</h1>
      </div>

      <div>
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
    </main>
  )
}
