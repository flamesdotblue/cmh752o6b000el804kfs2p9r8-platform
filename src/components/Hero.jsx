import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full flex items-center" aria-label="Hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/vi0ijCQQJTRFc8LA/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/70 backdrop-blur px-3 py-1 text-xs text-gray-700">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
            AI x Blockchain Innovation
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
            Build trustworthy AI on-chain
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            We design and deploy intelligent, verifiable systems that merge cutting‑edge AI with secure blockchain protocols—so your products are faster, smarter, and provably reliable.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#portfolio" className="inline-flex items-center gap-2 rounded-md bg-gray-900 px-5 py-3 text-white hover:bg-black transition-colors">
              <Rocket className="h-4 w-4" />
              Explore our work
            </a>
            <a href="#about" className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-5 py-3 text-gray-900 hover:bg-gray-50 transition-colors">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
