import Link from 'next/link'
import Image from 'next/image'

export default function Page() {
  return (
    <section>
      <div className="mb-8">
        <Image
          src="/SF.jpg"
          alt="Superficial"
          width={800}
          height={600}
          className="w-full h-auto rounded-lg"
          priority
        />
      </div>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Superficial
      </h1>
      <p className="mb-4">
        Superficial Labs is an artificial intelligence research and product company. We build infrastructure that accelerates AI adoption in humanity's most consequential applications.
      </p>
      <div className="mt-8 mb-4 flex items-center gap-2">
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
