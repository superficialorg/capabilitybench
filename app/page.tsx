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
          Current benchmarks measure intelligence: can the model solve this problem? But deployment requires knowing capability: does the model satisfy these specific requirements?
        </p>
        
        <p>
          A score of 78% on a benchmark tells you nothing about whether a model can operate within your hospital's clinical workflow, navigate your firm's jurisdiction constraints, or execute your company's customer service protocol. It's an aggregate over problems you may never encounter, evaluated on criteria that may not match yours.
        </p>

        <p>
          Today we're launching CapabilityBench (in private beta), a public registry that replaces opaque intelligence scores with traceable capability verdicts.
        </p>

        <p>
          The framework is simple. Organizations and researchers contribute policy packs encoding capability requirements for specific domains. Models are evaluated against these policies, and results show exactly which requirements each model satisfies or violates.
        </p>

        <p className="mb-16">
          The question shifts from "how smart is this model?" to "can this model do what I need?"
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
