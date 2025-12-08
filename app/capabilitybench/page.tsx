import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export const metadata = {
  title: 'CapabilityBench',
  description: 'A public registry that replaces opaque intelligence scores with traceable capability verdicts.',
}

export default function CapabilityBench() {
  return (
    <section>
      <h1 className="title font-semibold text-2xl tracking-tighter mb-8">
        CapabilityBench
      </h1>
      <article className="prose">
        <p className="flex gap-4">
          <a href="https://github.com/superficiallabs/cape/blob/main/CAPE.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-0.5">
            Full Paper <ArrowUpRight className="w-4 h-4" />
          </a>
          <Link href="/research/cape" className="inline-flex items-center gap-0.5">
            Launch Post <ArrowUpRight className="w-4 h-4" />
          </Link>
        </p>
        
        <p className="mt-8">
          Current benchmarks measure intelligence: can the model solve this problem? But deployment requires knowing capability: does the model satisfy specific requirements?
        </p>
        
        <p className="mb-16">
          CapabilityBench is a public registry where models are evaluated against community-contributed policies. Instead of aggregate scores, CapabilityBench presents traceable verdicts showing exactly which capability specifications each model satisfies or violates.
        </p>
        
        <h2 className="font-semibold text-lg mt-12 mb-4">Private Beta</h2>
        
        <p>
          CapabilityBench is currently in private beta with public release planned for early 2026.
        </p>
        
        <p>
          We're inviting organizations and researchers to contribute to CapabilityBench. If you would like to contribute, reach out to our team at <Link href="mailto:research@superficiallabs.com">research@superficiallabs.com</Link>.
        </p>
      </article>
    </section>
  )
}
