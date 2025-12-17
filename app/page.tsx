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
        <p className="flex gap-2 items-center">
          <a href="https://github.com/superficiallabs/cape/blob/main/CAPE.pdf" target="_blank" rel="noopener noreferrer">
            Read the paper
          </a>
          <span>→</span>
        </p>
        
        <p className="mt-8">
          Models are getting more intelligent. But intelligence doesn't mean deployable. Deployment requires a model to satisfy specific requirements: your compliance constraints, your workflow logic, your quality standards.
        </p>
        
        <p className="mb-8">
          We are building an open library of executable capabilities. CapabilityBench will host:
        </p>

        <p className="my-2">
          <strong>Community specs</strong>: Best practices contributed by practitioners.
        </p>
        <p className="my-2">
          <strong>Standards specs</strong>: WCAG, ECMA-376, platform constraints.
        </p>
        <p className="my-2 mb-12">
          <strong>Regulatory specs</strong>: Clinical, financial, legal requirements.
        </p>

        <h2 className="font-semibold text-lg mt-12 mb-4">Available Now: Anthropic Skills Suite</h2>
        
        <p>
          We converted all 16 of Anthropic's official Agent Skills into executable CAPE specifications.
        </p>

        <p className="mb-12">
          <a href="https://github.com/superficiallabs/cape/tree/main/cape-skills" target="_blank" rel="noopener noreferrer">
            View on GitHub →
          </a>
        </p>

        <h2 className="font-semibold text-lg mt-12 mb-4">Full Library: Early 2026</h2>
        
        <p>
          If your domain has requirements that models should meet, we want to hear from you.
        </p>
        
        <p className="mt-8">
          <a href="mailto:research@superficiallabs.com">research@superficiallabs.com</a>
        </p>
      </article>
    </section>
  )
}

