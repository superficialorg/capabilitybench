import Link from 'next/link'

export const metadata = {
  title: 'CAPE',
  description: 'CAPE is a post-training protocol that replaces expensive, noisy preference labeling with executable verification.',
}

export default function Cape() {
  return (
    <section>
      <h1 className="title font-semibold text-2xl tracking-tighter mb-4">
        CAPE
      </h1>
      <p className="mb-12">
        <Link href="https://arxiv.org/abs/XXXX.XXXXX">Paper →</Link> · <Link href="/research/cape">Blog →</Link> · <Link href="https://github.com/superficiallabs/cape">GitHub →</Link>
      </p>
      <article className="prose">
        <p className="mb-12">
          We work with frontier labs, regulated enterprises, and AI companies to deploy CAPE at scale. We offer:
        </p>
        <ul className="space-y-4 mb-16">
          <li><strong>Specification engineering</strong> — Translate requirements into executable capability policies.</li>
          <li><strong>Policy authoring</strong> — Replace preference labels with reusable, testable specifications.</li>
          <li><strong>PredicateGraph extraction</strong> — High-fidelity extraction for reliable verification.</li>
          <li><strong>Annotation-to-policy conversion</strong> — Convert existing labeled data into structured policy packs.</li>
          <li><strong>Learned verifiers</strong> — Build rubric-based verifiers for semantic properties not captured by rules.</li>
        </ul>
        <p className="mt-12">
          <Link href="mailto:contact@superficiallabs.com">Book a call →</Link>
        </p>
      </article>
    </section>
  )
}
