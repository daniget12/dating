
export interface Confession {
  id: string;
  originalText: string;
  polishedText: string;
  timestamp: number;
  vibe: string;
  category: 'Love' | 'Secret' | 'Regret' | 'Funny' | 'Angry' | 'General';
  isSafe: boolean;
  reactions: {
    heart: number;
    laugh: number;
    shock: number;
  };
}

export interface ModerationResult {
  isSafe: boolean;
  polishedText: string;
  vibe: string;
  category: Confession['category'];
  reason?: string;
}
