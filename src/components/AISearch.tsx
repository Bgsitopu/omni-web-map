import React, { useState, useEffect } from 'react';
import { Search, Sparkles, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { performAdvancedSearch } from '../services/geminiService';

export default function AISearch() {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    const response = await performAdvancedSearch(query, { timestamp: new Date().toISOString() });
    setResult(response);
    setLoading(false);
  };

  return (
    <div className="w-full space-y-4">
      <form onSubmit={handleSearch} className="relative group">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-neutral-400 group-focus-within:text-blue-500 transition-colors" />
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Tanya apa saja (misal: 'Bagaimana status di Medan?')"
          className="block w-full pl-10 pr-12 py-3 border border-neutral-200 rounded-xl bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none shadow-sm"
        />
        <button
          type="submit"
          disabled={loading}
          className="absolute inset-y-0 right-0 pr-3 flex items-center"
        >
          {loading ? (
            <Loader2 className="h-5 w-5 text-blue-500 animate-spin" />
          ) : (
            <Sparkles className="h-5 w-5 text-neutral-400 hover:text-blue-500 transition-colors" />
          )}
        </button>
      </form>

      <AnimatePresence>
        {result && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="p-4 bg-blue-50 border border-blue-100 rounded-xl text-neutral-800 text-sm leading-relaxed"
          >
            <div className="flex items-start gap-3">
              <Sparkles className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
              <div>
                <p className="font-medium text-blue-900 mb-1">AI Insights</p>
                <p>{result}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
