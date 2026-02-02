
import React, { useState } from 'react';
import { geminiService } from '../services/geminiService';
import { ResearchResult } from '../types';

const Research: React.FC = () => {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<ResearchResult | null>(null);

  const handleSearch = async () => {
    if (!query.trim() || isLoading) return;
    setIsLoading(true);
    try {
      const data = await geminiService.research(query);
      setResult(data);
    } catch (err) {
      alert("Research failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 pt-24 pb-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold mb-4">Grounded Research</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">Get factual answers powered by Google Search grounding for real-time accuracy and verifiable sources.</p>
      </div>

      <div className="mb-12">
        <div className="glass p-2 rounded-2xl border border-white/10 shadow-xl flex items-center gap-2 max-w-3xl mx-auto focus-within:border-indigo-500/50 transition-all">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            placeholder="Explore recent news, trends, or complex data..."
            className="flex-1 bg-transparent border-none outline-none px-6 py-4 text-white placeholder:text-gray-500"
          />
          <button
            onClick={handleSearch}
            disabled={isLoading || !query.trim()}
            className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 disabled:bg-gray-700 disabled:opacity-50 text-white rounded-xl font-bold transition-all shadow-lg"
          >
            {isLoading ? <i className="fas fa-circle-notch fa-spin"></i> : 'Research'}
          </button>
        </div>
      </div>

      {result && (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="p-8 glass rounded-3xl border border-white/10">
            <h3 className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-4">Lumina Insight</h3>
            <div className="prose prose-invert max-w-none text-gray-200 text-lg leading-relaxed">
              {result.answer}
            </div>
          </div>

          {result.sources.length > 0 && (
            <div>
              <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                <i className="fas fa-link text-indigo-400"></i>
                Cited Sources
              </h4>
              <div className="grid sm:grid-cols-2 gap-4">
                {result.sources.map((source, idx) => (
                  <a
                    key={idx}
                    href={source.uri}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 hover:border-indigo-500/30 transition-all group flex items-start gap-4"
                  >
                    <div className="w-10 h-10 bg-indigo-600/10 rounded-lg flex items-center justify-center text-indigo-400 flex-shrink-0">
                      <i className="fas fa-globe text-sm"></i>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-gray-200 line-clamp-1 mb-1 group-hover:text-white">
                        {source.title || new URL(source.uri).hostname}
                      </div>
                      <div className="text-xs text-gray-500 truncate max-w-[200px]">{source.uri}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Research;
