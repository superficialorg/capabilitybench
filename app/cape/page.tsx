import Link from 'next/link'

export const metadata = {
  title: 'CAPE: Verifiable Post-Training for Enterprise AI',
  description: 'CAPE is a post-training protocol that replaces expensive, noisy preference labeling with executable verification.',
}

export default function Cape() {
  return (
    <section>
      <h1 className="title font-semibold text-2xl tracking-tighter mb-8">
        CAPE: Verifiable Post-Training for Enterprise AI
      </h1>
      <article className="prose">
        <p>
          CAPE is a post-training protocol that replaces expensive, noisy preference labeling with executable verification. Instead of collecting human judgments that disagree 30–50% of the time, CAPE lets you specify requirements directly and train models to satisfy them. The result: 74% fewer violations than preference-based methods, at 20–200× lower cost, with full auditability for regulated industries.
        </p>
        <p>
          We work with frontier labs and enterprises to deploy CAPE at scale, providing optimized extractors, rapid policy authoring, and expertise in translating your requirements into verifiable specifications.
        </p>
        <p>
          Most organizations begin their first verification loop within weeks, not months.
        </p>
        <p>
          <Link href="mailto:contact@superficiallabs.com">Book a call →</Link>
        </p>
        <p>
          <Link href="/research/cape">Read technical paper →</Link>
        </p>
        <p>
          <Link href="/research/cape">Read release blog →</Link>
        </p>
      </article>
    </section>
  )
}
