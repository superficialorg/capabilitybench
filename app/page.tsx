export const metadata = {
  title: 'CapabilityBench',
  description: 'A public registry that replaces opaque intelligence scores with traceable capability verdicts.',
}

export default function Home() {
  return (
    <section>
      <h1 className="title font-semibold text-2xl tracking-tighter mb-8">
        CapabilityBench
      </h1>
      <article className="prose">
        <p className="flex gap-4 italic">
          <a href="https://github.com/superficiallabs/cape/blob/main/CAPE.pdf" target="_blank" rel="noopener noreferrer">
            Read the paper
          </a>
        </p>
        
        <p className="mt-8">
          Benchmarks measure intelligence. But deployment requires capability. The real question isn't "how smart is this model?" but "can it satisfy the requirements that matter?"
        </p>
        
        <p className="mb-16">
          CapabilityBench evaluates models against executable specifications like regulatory compliance (HIPAA, GDPR), financial suitability rules, clinical protocol adherence, workflow execution, and more. Instead of aggregate intelligence scores, it shows exactly what a model can and cannot do, with verifiable, capability-level results.
        </p>
        
        <p>
          CapabilityBench launches publicly in early 2026.
        </p>
        
        <p>
          We're building an open, shared library of executable capabilities. If your domain has requirements that models should meet, we'd love to hear from you.
        </p>
        
        <p className="mt-8">
          <a href="mailto:research@superficiallabs.com">research@superficiallabs.com</a>
        </p>
      </article>
    </section>
  )
}
