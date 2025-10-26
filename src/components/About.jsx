import React from 'react';
import { Brain, Cpu, Lock, Coins } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Applied AI',
    desc: 'From LLM orchestration to multimodal agents, we ship production-grade intelligence for real use cases.'
  },
  {
    icon: Lock,
    title: 'Trust & Security',
    desc: 'Zero-knowledge proofs, verifiable compute, and on-chain attestations for transparent AI pipelines.'
  },
  {
    icon: Coins,
    title: 'Tokenized Economies',
    desc: 'Incentive-aligned, permissionless systems that reward high-quality data, models, and compute.'
  },
  {
    icon: Cpu,
    title: 'Scalable Infrastructure',
    desc: 'Modular architectures, rollup-friendly designs, and robust DevOps for rapid iteration.'
  }
];

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">About Us</h2>
            <p className="mt-4 text-gray-600 text-lg">
              We are a product studio building at the intersection of AI and blockchain. Our mission is to make intelligent systems verifiable, accountable, and open. From research to production, we partner with teams to architect, build, and launch breakthrough products.
            </p>
            <p className="mt-4 text-gray-600">
              Engagements range from rapid prototypes to fully managed platforms. We care about clarity, velocity, and measurable impact.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-xl border border-gray-200 p-5 bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="h-10 w-10 rounded-md bg-gradient-to-tr from-indigo-500 to-fuchsia-500 text-white flex items-center justify-center">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
                <p className="mt-2 text-sm text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
