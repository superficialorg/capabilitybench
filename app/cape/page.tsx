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
          We work with frontier labs, regulated enterprises, and AI companies to deploy CAPE at scale.
        </p>
        
        <h2>What We Offer</h2>
        
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
        
        <p className="mt-12">
          <strong>Contact:</strong> <Link href="mailto:research@superficiallabs.com">research@superficiallabs.com</Link>
        </p>
        
        <p>
          Read the paper: <Link href="https://arxiv.org/abs/2512.XXXXX">CAPE: Capability Achievement via Policy Execution</Link>
        </p>
      </article>
    </section>
  )
}
