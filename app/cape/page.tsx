import Link from 'next/link'

export const metadata = {
  title: 'CAPE: A New Paradigm for Post-Training',
  description: 'CAPE is a post-training protocol that replaces expensive, noisy preference labeling with executable verification.',
}

export default function Cape() {
  return (
    <section>
      <h1 className="title font-semibold text-2xl tracking-tighter mb-8">
        CAPE: A New Paradigm for Post-Training
      </h1>
      <article className="prose">
        <p className="mb-12">
          We work with frontier labs, regulated enterprises, and AI companies to deploy CAPE at scale.
        </p>
        <h2 className="mt-0">What we offer</h2>
        <ul className="space-y-4 mb-16">
          <li><strong>Custom specification</strong> — Convert your requirements into verifiable, executable policies</li>
          <li><strong>Expert policy creation</strong> — Replace existing preference labeling with reusable specifications</li>
          <li><strong>Frontier-quality extraction</strong> — Production-grade PredicateGraph extraction for reliable verification</li>
          <li><strong>Annotation-to-policy conversion</strong> — Transform existing labeled data into composable policy packs</li>
          <li><strong>Custom learned verifiers</strong> — Rubric-based verifiers for semantic properties your rules can't capture</li>
        </ul>
        <p className="mt-12">
          <Link href="mailto:contact@superficiallabs.com">Book a call →</Link>
        </p>
        <p>
          <Link href="https://arxiv.org/abs/XXXX.XXXXX">Paper →</Link> · <Link href="/research/cape">Blog →</Link> · <Link href="https://github.com/superficiallabs/cape">GitHub →</Link>
        </p>
      </article>
    </section>
  )
}
