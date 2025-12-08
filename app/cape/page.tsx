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
        <p className="flex gap-4 italic">
          <a href="https://github.com/superficiallabs/cape/blob/main/CAPE.pdf" target="_blank" rel="noopener noreferrer">
            Full Paper
          </a>
          <span>·</span>
          <Link href="/research/cape">
            Launch Post
          </Link>
        </p>
        
        <p className="mt-8">
          CAPE delivers post-training that engineers capability, not just intelligence.
        </p>
        
        <p className="mb-8">
          We work with frontier labs, regulated enterprises, and AI companies to deploy CAPE at scale:
        </p>
        
        <ul>
          <li><strong>Specification Engineering</strong> — Turn your requirements into executable policies. What you need the model to do, written in a form that's verifiable.</li>
          <li><strong>Policy Architecture</strong> — Composable policy stacks that replace per-example annotation. Write once, apply everywhere.</li>
          <li><strong>High-Fidelity Extraction</strong> — PredicateGraph pipelines tuned to your domain. Better extraction means higher capability ceiling.</li>
          <li><strong>Annotation-to-Policy Conversion</strong> — Already have labeled data? Convert it to reusable specs and stop paying for the same capability twice.</li>
          <li><strong>Learned Verifiers</strong> — Rubric-based verifiers for semantic properties that can't be checked structurally.</li>
        </ul>
        
        <p className="mt-12">
          <Link href="mailto:contact@superficiallabs.com">contact@superficiallabs.com</Link>
        </p>
      </article>
    </section>
  )
}
