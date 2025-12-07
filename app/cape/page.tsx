import Link from 'next/link'

export const metadata = {
  title: 'CAPE',
  description: 'CAPE is a post-training protocol that replaces expensive, noisy preference labeling with executable verification.',
}

export default function Cape() {
  return (
    <section>
      <h1 className="title font-semibold text-2xl tracking-tighter mb-8">
        CAPE
      </h1>
      <article className="prose">
        <p className="mb-12">
          We work with frontier labs, regulated enterprises, and AI companies to deploy CAPE at scale. What we offer:
        </p>
        <ul className="space-y-4 mb-12">
          <li><strong>Specification Engineering</strong>: Translate your requirements into executable policies and rubrics.</li>
          <li><strong>Policy Architecture</strong>: Design composable policy stacks for your domain and context without preference labelling.</li>
          <li><strong>High-Fidelity Extraction</strong>: Implement PredicateGraph pipelines optimized for your data.</li>
          <li><strong>Annotation-to-Policy Conversion</strong>: Extract implicit patterns from existing labeled data into explicit specifications.</li>
          <li><strong>Learned Verifiers</strong>: Build rubric-based verifiers for semantic properties.</li>
        </ul>
        <p className="mt-8">
          <Link href="https://arxiv.org/abs/XXXX.XXXXX">Read the full paper →</Link> | <Link href="https://github.com/superficiallabs/cape">GitHub →</Link> | <Link href="mailto:contact@superficiallabs.com">Book a call →</Link>
        </p>
      </article>
    </section>
  )
}
