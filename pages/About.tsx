
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 pt-24 pb-12">
      <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
        <div>
          <h2 className="text-5xl font-black mb-8">Redefining the <span className="text-indigo-500">Human-AI</span> Bond</h2>
          <p className="text-gray-400 text-lg mb-6 leading-relaxed">
            Lumina Hub is a research project dedicated to making high-performance multimodal AI accessible through intuitive interfaces. 
          </p>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            By leveraging the latest Gemini 3.0 and 2.5 series models, we offer a seamless workflow from text generation to creative visualization and data-backed research.
          </p>
          <div className="flex gap-4">
            <div className="p-4 glass rounded-2xl border border-white/5 flex-1">
              <div className="text-2xl font-bold text-white mb-1">99.9%</div>
              <div className="text-xs text-gray-500 uppercase tracking-tighter">Uptime</div>
            </div>
            <div className="p-4 glass rounded-2xl border border-white/5 flex-1">
              <div className="text-2xl font-bold text-white mb-1">2.4s</div>
              <div className="text-xs text-gray-500 uppercase tracking-tighter">Latency</div>
            </div>
            <div className="p-4 glass rounded-2xl border border-white/5 flex-1">
              <div className="text-2xl font-bold text-white mb-1">10M+</div>
              <div className="text-xs text-gray-500 uppercase tracking-tighter">Images</div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl shadow-indigo-500/10">
            <img src="https://picsum.photos/800/800?grayscale" alt="Team" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -left-6 p-6 glass rounded-2xl border border-white/10 max-w-[240px]">
            <p className="text-sm font-medium">"Our mission is to democratize high-level reasoning for every creator."</p>
          </div>
        </div>
      </div>

      <section className="p-12 glass rounded-[40px] border border-white/10 text-center">
        <h3 className="text-3xl font-bold mb-6">Stay Connected</h3>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto">Join our developer community or reach out for enterprise-grade solutions.</p>
        <div className="flex flex-wrap justify-center gap-6">
          <button className="flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-colors">
            <i className="fab fa-discord"></i> Discord
          </button>
          <button className="flex items-center gap-2 px-6 py-3 border border-white/10 rounded-xl font-bold hover:bg-white/5 transition-colors">
            <i className="fab fa-github"></i> GitHub
          </button>
          <button className="flex items-center gap-2 px-6 py-3 border border-white/10 rounded-xl font-bold hover:bg-white/5 transition-colors">
            <i className="fas fa-envelope"></i> Contact Sales
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
