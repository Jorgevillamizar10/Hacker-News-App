export interface dataProps {
  author?: string;
  comment_text?: string;
  created_at?: string;
  created_at_i?: number;
  num_comments?: null;
  objectID?: string;
  parent_id?: number;
  points?: number;
  story_id?: string;
  story_text?: string;
  story_title?: string;
  story_url?: string;
  title?: string;
  url?: string;
  id?: string;
}

export interface ArticlesProps {
  data?: Array<dataProps> | undefined;
}

export interface RequestProps {
  exhaustiveNbHits: Boolean;
  hits: Array<dataProps>;
  hitsPerPage: number;
  nbHits: number;
  nbPages: number;
  page: number;
  params: string;
  processingTimeMS: number;
  query: string;
}