import Link from 'next/link'
import Image from 'next/image'

export default function Page() {
  return (
    <section>
      <div className="mb-12">
        <Image
          src="/SF3.png"
          alt="Superficial"
          width={800}
          height={600}
          className="w-full h-auto rounded-lg"
          priority
        />
      </div>
      <p className="mb-4">
        Superficial is an artificial intelligence research company. Our goal is to accelerate human progress by making AI intelligent and capable enough for the world's most important work.
      </p>
      <div className="mt-12 mb-4 flex flex-col gap-2">
        <span className="flex items-center gap-1.5 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-200 w-fit">
          <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
          New
        </span>
        <Link
          href="/research/cape"
          className="text-black font-medium transition-colors hover:text-neutral-600"
        >
          Introducing CAPE: Capability Engineering for AI →
        </Link>
      </div>
    </section>
  )
}
