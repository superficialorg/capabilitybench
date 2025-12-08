import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

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
        <p className="flex gap-4">
          <a href="https://arxiv.org/abs/XXXX.XXXXX" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-0.5">
            Full Paper <ArrowUpRight className="w-4 h-4" />
          </a>
          <Link href="/research/cape" className="inline-flex items-center gap-0.5">
            Launch Post <ArrowUpRight className="w-4 h-4" />
          </Link>
        </p>
        
        <p className="mb-16 mt-8">
          We work with frontier labs, regulated enterprises, and AI companies to deploy CAPE at scale. We offer:
        </p>
        
        <ul>
          <li><strong>Specification Engineering</strong> — Convert capability requirements into executable policies and rubrics.</li>
          <li><strong>Policy Architecture</strong> — Design composable, reusable policy stacks that replace annotation campaigns.</li>
          <li><strong>High-Fidelity Extraction</strong> — Build PredicateGraph pipelines that maximize capability gains.</li>
          <li><strong>Annotation-to-Policy Conversion</strong> — Turn existing labeled data into reusable specifications, amortizing prior training spend.</li>
          <li><strong>Learned Verifiers</strong> — Train rubric-based verifiers for semantic properties.</li>
        </ul>
        
        <p className="mt-12">
          Interested in deploying CAPE? Contact us at <Link href="mailto:contact@superficiallabs.com">contact@superficiallabs.com</Link>
        </p>
      </article>
    </section>
  )
}
