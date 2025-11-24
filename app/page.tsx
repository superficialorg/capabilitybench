import Link from 'next/link'
import Image from 'next/image'

export default function Page() {
  return (
    <section>
      <div className="mb-8">
        <Image
          src="/SF2.png"
          alt="Superficial"
          width={800}
          height={600}
          className="w-full h-auto rounded-lg"
          priority
        />
      </div>
      <p className="mb-4">
        Superficial Labs is an artificial intelligence research and product company.
      </p>
      <p className="mb-4">
        Our goal is to accelerate human progress by making AI capable and reliable enough for the world's most important work.
      </p>
      <div className="mt-12 mb-4 flex items-center gap-2">
        <span className="flex items-center gap-1.5 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-200">
          <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
          New
        </span>
        <Link
          href="https://core-seven-nu.vercel.app/cape"
          className="text-black underline transition-colors hover:text-neutral-600"
        >
          Introducing CAPE: Breaking Through the Post-Training Scaling Wall
        </Link>
      </div>
    </section>
  )
}
