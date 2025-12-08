import Link from 'next/link'

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
        <p className="flex gap-4 italic">
          <a href="https://github.com/superficiallabs/cape/blob/main/CAPE.pdf" target="_blank" rel="noopener noreferrer">
            CAPE full paper
          </a>
          <span>·</span>
          <Link href="/research/cape">
            CAPE launch post
          </Link>
        </p>
        
        <p className="mt-8">
          Benchmarks measure intelligence. But deployment requires capability: does the model satisfy specific requirements? Not "how smart is this model?" but "can it do what I need?"
        </p>
        
        <p className="mb-16">
          CapabilityBench evaluates models against executable specifications like regulatory compliance (HIPAA, GDPR), financial suitability rules, clinical protocol adherence, multi-step workflow execution. Instead of aggregate scores, you see exactly what each model can and can't do.
        </p>
        
        <h2 className="font-semibold text-lg mt-12 mb-4">Private Beta</h2>
        
        <p>
          CapabilityBench launches publicly in early 2026.
        </p>
        
        <p>
          We want to build this with the community. If you have capability requirements that should be standardized, domains that need coverage, or feedback on the approach, we want to hear from you.
        </p>
        
        <p className="mt-8">
          <Link href="mailto:research@superficiallabs.com">research@superficiallabs.com</Link>
        </p>
      </article>
    </section>
  )
}
