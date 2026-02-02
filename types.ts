
export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface GroundingSource {
  title?: string;
  uri: string;
}

export interface ResearchResult {
  answer: string;
  sources: GroundingSource[];
}

export interface GeneratedImage {
  id: string;
  url: string;
  prompt: string;
  timestamp: Date;
}
