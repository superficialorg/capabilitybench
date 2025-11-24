import Link from 'next/link'

export const metadata = {
  title: 'CAPE',
  description: 'CAPE is the policy engine that operationalises our mission: making AI capable and reliable enough for meaningful, real-world work.',
}

export default function Cape() {
  return (
    <section>
      <h1 className="title font-semibold text-2xl tracking-tighter mb-8">
        CAPE
      </h1>
      <article className="prose">
        <p>
          CAPE is the policy engine that operationalises our mission: making AI capable and reliable enough for meaningful, real-world work.
        </p>
        <p>
          It transforms expert reasoning into deterministic checks, verified corrections, and high-quality training data — giving teams a precise way to control model behaviour at scale.
        </p>
        <p>
          Explore the <Link href="/research/cape">launch blog</Link>, read the full <a href="file://mnt/data/CAPE%20(Superficial%20Labs).pdf">arXiv paper</a>, or inspect the <a href="https://github.com/superficiallabs/cape-core">GitHub repo</a>. Join the community to exchange policy ideas and implementation patterns.
        </p>
        <p>
          Soon, we'll open a policy platform where practitioners can publish, share, and reuse high-quality policies — forming an open ecosystem of verifiable behavioural components.
        </p>
        <h2>Two Versions of CAPE</h2>
        <p>
          CAPE is available in two forms: the open foundation used for research and experimentation, and the production execution environment designed for organisations deploying AI in consequential domains.
        </p>
        <h2>CAPE-Core (Open Source)</h2>
        <p>
          The transparent, minimal engine that provides:
        </p>
        <ul>
          <li>deterministic policy evaluation</li>
          <li>predicate extraction</li>
          <li>correction generation</li>
          <li>a lightweight policy authoring interface</li>
        </ul>
        <p>
          CAPE-Core is fully inspectable and easy to extend — ideal for research, experimentation, and custom development.
        </p>
        <p>
          It ensures the foundational mechanics of dependable AI remain open, auditable, and community-driven.
        </p>
        <h2>CAPE Runtime (Production System)</h2>
        <p>
          CAPE Runtime extends the open-source core into a full production execution environment built for accuracy, fidelity, and scale. It provides the components required to deploy dependable AI systems in the world's most important work.
        </p>
        <p>
          <strong>High-fidelity extraction</strong>
        </p>
        <p>
          Our closed, fine-tuned extractor delivers significantly higher precision and lower residual error than open models — reducing false corrections and enabling stronger downstream capability improvements.
        </p>
        <p>
          <strong>Policy synthesis from preference data</strong>
        </p>
        <p>
          Automatically convert RLHF datasets, preference logs, and human-labelled traces into deterministic CAPE policies, turning past training investments into durable behavioural specifications.
        </p>
        <p>
          <strong>Custom policy creation + Policy Packs</strong>
        </p>
        <p>
          Expert-designed domain policies, collaborative authoring, versioning, approvals, and ready-to-use packs across reasoning, helpfulness, safety, coding, legal, finance, and more.
        </p>
        <p>
          <strong>Distributed, high-throughput enforcement</strong>
        </p>
        <p>
          Parallelised extraction and policy evaluation across millions of tokens per minute.
        </p>
        <p>
          <strong>Verified correction synthesis</strong>
        </p>
        <p>
          Automatic generation and validation of correction pairs and fine-tuning-ready datasets.
        </p>
        <p>
          <strong>Monitoring, drift detection, and analytics</strong>
        </p>
        <p>
          Real-time visibility into policy coverage, anomalies, extraction health, and behavioural drift.
        </p>
        <p>
          <strong>Training workflow integration</strong>
        </p>
        <p>
          Stream verified corrections directly into fine-tuning pipelines for continuous capability improvement.
        </p>
        <p>
          CAPE Runtime delivers the fidelity, control, and operational reliability required to run deterministic behaviour shaping at production scale — capability no open-source configuration can match.
        </p>
        <h2>Work With Us</h2>
        <p>
          Organisations deploying AI in consequential settings use CAPE Runtime to achieve higher capability, stronger reliability, and predictable behaviour at scale.
        </p>
        <p>
          To discuss your deployment, get in touch with us.
        </p>
        <p>
          <Link href="mailto:contact@superficiallabs.com">Contact us →</Link>
        </p>
      </article>
    </section>
  )
}
