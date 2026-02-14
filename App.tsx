
import React, { useState, useEffect, useRef } from 'react';
import { Confession } from './types';
import { ConfessionCard } from './components/ConfessionCard';
import { ConfessionForm } from './components/ConfessionForm';

const INITIAL_CONFESSIONS: Confession[] = [
  {
    id: '1',
    originalText: "I've been secretly eating my roommate's cheese for months.",
    polishedText: "In the quiet hours of the night, I confess: your gourmet cheddar has a secret admirer. I've been indulging in your cheese stash for months, one slice at a time.",
    timestamp: Date.now() - 3600000,
    vibe: "Cheesy",
    category: "Funny",
    isSafe: true,
    reactions: { heart: 5, laugh: 12, shock: 2 }
  },
  {
    id: '2',
    originalText: "I think I'm in love with my best friend but she's dating my cousin.",
    polishedText: "My heart is a traitor, whispering names it shouldn't. I'm drowning in love for my best friend, while she holds hands with my cousin. A messy symphony of silence.",
    timestamp: Date.now() - 7200000,
    vibe: "Melancholy",
    category: "Love",
    isSafe: true,
    reactions: { heart: 24, laugh: 0, shock: 8 }
  }
];

const App: React.FC = () => {
  const [confessions, setConfessions] = useState<Confession[]>(INITIAL_CONFESSIONS);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to bottom on new confession
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [confessions]);

  const handleAddConfession = (c: Confession) => {
    setConfessions(prev => [...prev, c]);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex flex-col font-sans">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 p-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-tr from-blue-500 to-blue-400 rounded-full flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <div>
              <h1 className="text-lg font-bold text-slate-800 dark:text-slate-100 leading-tight">TeleConfess Bot</h1>
              <p className="text-xs text-green-500 font-medium flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                {confessions.length + 42} users online
              </p>
            </div>
          </div>
          <div className="flex gap-4">
             <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
               </svg>
             </button>
             <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
               </svg>
             </button>
          </div>
        </div>
      </header>

      {/* Main Feed */}
      <main 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-4 md:p-6"
      >
        <div className="max-w-4xl mx-auto">
          {/* Welcome Message */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-2xl p-4 mb-8 text-center">
            <h2 className="text-blue-800 dark:text-blue-300 font-bold mb-1">Welcome to the Secret Chamber 🤫</h2>
            <p className="text-sm text-blue-600 dark:text-blue-400">Everything shared here is 100% anonymous. Our AI-Butler will polish your secrets before they go live.</p>
          </div>

          <div className="space-y-2">
            {confessions.map((c) => (
              <ConfessionCard key={c.id} confession={c} />
            ))}
          </div>
        </div>
      </main>

      {/* Bottom Input Area */}
      <ConfessionForm onAdd={handleAddConfession} />
    </div>
  );
};

export default App;
