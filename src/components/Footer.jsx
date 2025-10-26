import React from 'react';
import { Mail, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">Let’s build something verifiable</h3>
            <p className="mt-3 text-gray-600">Tell us about your challenge—AI, blockchain, or both—and we’ll propose a clear, actionable path to launch.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:justify-end">
            <a href="mailto:hello@neonblock.ai" className="inline-flex items-center gap-2 rounded-md bg-gray-900 px-5 py-3 text-white hover:bg-black transition-colors">
              <Mail className="h-4 w-4" />
              hello@neonblock.ai
            </a>
            <a href="#" className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-5 py-3 text-gray-900 hover:bg-gray-50 transition-colors">
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </div>
        </div>
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} NeonBlock AI. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#about" className="hover:text-gray-700">About</a>
            <a href="#portfolio" className="hover:text-gray-700">Portfolio</a>
            <a href="#home" className="hover:text-gray-700">Top</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
