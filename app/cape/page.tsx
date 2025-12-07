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
        <p className="font-semibold">
          <a href="https://arxiv.org/abs/XXXX.XXXXX" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-0.5">
            Full Paper <ArrowUpRight className="w-4 h-4" />
          </a>
        </p>
        <p className="font-semibold">
          <Link href="/research/cape" className="inline-flex items-center gap-0.5">
            Launch Post <ArrowUpRight className="w-4 h-4" />
          </Link>
        </p>
        
        <p className="mb-12 mt-8">
          We work with frontier labs, regulated enterprises, and AI companies to deploy CAPE at scale. We offer:
        </p>
        
        <p><strong>Specification Engineering</strong></p>
        <p>Translate your requirements into executable policies and rubrics. We work with your domain experts to convert implicit expectations into verifiable specifications.</p>
        
        <p><strong>Policy Architecture</strong></p>
        <p>Design composable policy stacks for your domain—no preference labelling required. Policies are reusable across model versions, auditable, and version-controlled.</p>
        
        <p><strong>High-Fidelity Extraction</strong></p>
        <p>Implement PredicateGraph pipelines optimized for your outputs. Extraction accuracy determines your ceiling; we push it as high as current models allow.</p>
        
        <p><strong>Annotation-to-Policy Conversion</strong></p>
        <p>Already have labeled data? We extract the implicit patterns into explicit specifications, turning sunk annotation costs into reusable assets.</p>
        
        <p><strong>Learned Verifiers</strong></p>
        <p>Build rubric-based verifiers for semantic properties—reasoning validity, plan feasibility, domain-specific correctness—with meta-verification to catch hallucinated issues.</p>
        
        <p className="mt-16">
          <Link href="mailto:research@superficiallabs.com">Book a call</Link>
        </p>
      </article>
    </section>
  )
}
