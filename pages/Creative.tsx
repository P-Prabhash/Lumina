
import React, { useState } from 'react';
import { geminiService } from '../services/geminiService';
import { GeneratedImage } from '../types';

const Creative: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [aspectRatio, setAspectRatio] = useState<"1:1" | "16:9" | "9:16">("1:1");
  const [gallery, setGallery] = useState<GeneratedImage[]>([]);

  const handleGenerate = async () => {
    if (!prompt.trim() || isLoading) return;
    setIsLoading(true);

    try {
      const url = await geminiService.generateImage(prompt, aspectRatio);
      const newImg: GeneratedImage = {
        id: Date.now().toString(),
        url,
        prompt,
        timestamp: new Date()
      };
      setGallery(prev => [newImg, ...prev]);
    } catch (err) {
      alert("Failed to generate image. Please try a different prompt.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 pt-24 pb-12">
      <div className="grid lg:grid-cols-3 gap-12">
        {/* Controls */}
        <div className="lg:col-span-1 space-y-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">Lumina Studio</h2>
            <p className="text-gray-400">Describe the visual in your mind, and let Gemini bring it to life.</p>
          </div>

          <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-300">Prompt</label>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="A futuristic synthwave city with neon lights and flying cars..."
              className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 min-h-[150px] outline-none focus:border-indigo-500 transition-colors"
            />
          </div>

          <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-300">Aspect Ratio</label>
            <div className="grid grid-cols-3 gap-2">
              {(['1:1', '16:9', '9:16'] as const).map(ratio => (
                <button
                  key={ratio}
                  onClick={() => setAspectRatio(ratio)}
                  className={`p-3 rounded-xl border transition-all text-sm font-bold ${
                    aspectRatio === ratio 
                    ? 'bg-indigo-600 border-indigo-500' 
                    : 'bg-white/5 border-white/10 hover:border-white/30'
                  }`}
                >
                  {ratio}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleGenerate}
            disabled={isLoading || !prompt.trim()}
            className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 disabled:bg-gray-700 disabled:opacity-50 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-indigo-600/20"
          >
            {isLoading ? (
              <><i className="fas fa-spinner fa-spin"></i> Generating...</>
            ) : (
              <><i className="fas fa-magic"></i> Generate Vision</>
            )}
          </button>
        </div>

        {/* Gallery */}
        <div className="lg:col-span-2">
          {gallery.length === 0 ? (
            <div className="h-full min-h-[400px] border-2 border-dashed border-white/10 rounded-3xl flex flex-col items-center justify-center text-gray-500">
              <i className="fas fa-image text-5xl mb-4 opacity-20"></i>
              <p>Your generated masterpieces will appear here</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 gap-6">
              {gallery.map(img => (
                <div key={img.id} className="group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 aspect-square">
                  <img src={img.url} alt={img.prompt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end">
                    <p className="text-sm line-clamp-2 text-white font-medium mb-2">"{img.prompt}"</p>
                    <button 
                      onClick={() => {
                        const link = document.createElement('a');
                        link.href = img.url;
                        link.download = `lumina-${img.id}.png`;
                        link.click();
                      }}
                      className="w-full py-2 bg-white text-black rounded-lg text-xs font-bold hover:bg-gray-200"
                    >
                      Download PNG
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Creative;
