import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    name: 'ZK-Verified LLM Inference',
    desc: 'A pipeline that proves correctness of model outputs using succinct ZK proofs, with on-chain verification and attestations.',
    tags: ['ZK', 'LLM', 'On-chain Verify'],
    links: [
      { label: 'Case Study', href: '#' }
    ]
  },
  {
    name: 'Agentic DeFi Guardrails',
    desc: 'Autonomous trading agents with policy constraints, risk checks, and simulation-in-the-loop before execution.',
    tags: ['Agents', 'DeFi', 'Risk'],
    links: [
      { label: 'Overview', href: '#' },
      { label: 'Github', href: '#', icon: Github }
    ]
  },
  {
    name: 'Data Provenance Network',
    desc: 'A protocol for tracking data lineage and quality scores across AI training pipelines with tokenized incentives.',
    tags: ['Provenance', 'Tokens', 'Data'],
    links: [
      { label: 'Docs', href: '#' },
      { label: 'Demo', href: '#' }
    ]
  }
];

function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full bg-gray-100 text-gray-700 px-2.5 py-1 text-xs mr-2 mb-2">
      {children}
    </span>
  );
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Portfolio</h2>
            <p className="mt-3 text-gray-600">Selected work across AI, cryptography, and protocol engineering.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm text-gray-900 hover:bg-gray-50">Work with us</a>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.name} className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-950">{p.name}</h3>
                <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-gray-500" />
              </div>
              <p className="mt-2 text-sm text-gray-600">{p.desc}</p>
              <div className="mt-4 flex flex-wrap">
                {p.tags.map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                {p.links.map((l) => {
                  const Icon = l.icon;
                  return (
                    <a key={l.label} href={l.href} className="inline-flex items-center gap-2 text-sm text-indigo-600 hover:text-indigo-700">
                      {Icon ? <Icon className="h-4 w-4" /> : null}
                      {l.label}
                    </a>
                  );
                })}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
