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
          Current benchmarks measure broad intelligence: can the model solve this problem? But deployment requires contextual capability: does the model satisfy these specific requirements?
        </p>
        
        <p>
          CapabilityBench is a public registry that replaces opaque intelligence scores with traceable capability verdicts.
        </p>

        <p>
          The framework is simple. Organizations contribute CAPE policy packs encoding capability requirements for specific domains. Models are evaluated against these policies. Results show exactly which requirements each model satisfies or violates.
        </p>

        <p className="mb-12">
          The question shifts from "how smart is this model?" to "can this model do what I need?"
        </p>

        <h2 className="font-semibold text-lg mt-12 mb-4">Full Registry: Early 2026</h2>
        
        <p>
          CapabilityBench launches publicly in early 2026 with policy packs across regulated industries, enterprise workflows, and research domains.
        </p>
        
        <p>
          We are building an open library of executable capabilities. If your domain has requirements that models should meet, we want to hear from you.
        </p>
        
        <p className="mt-8">
          <a href="mailto:research@superficiallabs.com">research@superficiallabs.com</a>
        </p>
      </article>
    </section>
  )
}

