
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="pt-24 pb-12">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 mb-24">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold text-indigo-400 border border-indigo-400/30 rounded-full bg-indigo-400/5 backdrop-blur-sm animate-pulse">
            Introducing Lumina AI 3.0
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight">
            The Next Generation of <br />
            <span className="text-indigo-500">Creative Intelligence</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            A unified platform for conversational AI, visual synthesis, and grounded research. Built with Gemini's most advanced multimodal models.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/chat" className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-500 rounded-xl font-bold transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-indigo-600/20">
              Start Chatting
            </Link>
            <Link to="/creative" className="w-full sm:w-auto px-8 py-4 glass hover:bg-white/10 border border-white/10 rounded-xl font-bold transition-all transform hover:scale-105 active:scale-95">
              Explore Studio
            </Link>
          </div>
        </div>
        
        {/* Background blobs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-600/20 blur-[120px] rounded-full -z-10"></div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        {[
          {
            title: "Adaptive Chat",
            desc: "Advanced conversational context with Gemini 3 Flash for near-instant responses.",
            icon: "fa-comments",
            link: "/chat"
          },
          {
            title: "Creative Studio",
            desc: "Synthesize high-fidelity visuals from pure text descriptions in seconds.",
            icon: "fa-palette",
            link: "/creative"
          },
          {
            title: "Fact Research",
            desc: "Search-grounded insights providing real-time accuracy and cited sources.",
            icon: "fa-search",
            link: "/research"
          }
        ].map((feature, i) => (
          <Link key={i} to={feature.link} className="group p-8 rounded-3xl border border-white/5 bg-white/5 hover:bg-white/[0.08] transition-all hover:border-indigo-500/30">
            <div className="w-12 h-12 bg-indigo-600/20 rounded-2xl flex items-center justify-center mb-6 text-indigo-400 group-hover:scale-110 transition-transform">
              <i className={`fas ${feature.icon} text-xl`}></i>
            </div>
            <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
            <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
          </Link>
        ))}
      </section>
    </div>
  );
};

export default Home;
