import { ItemSnippet } from './item-snippet.model';

export interface SearchItem {
  kind?: string;
  etag?: string;
  id?: {
    kind: string;
    videoId: string;
  };
  snippet?: ItemSnippet;
  statistics?: {
    viewCount?: string;
    likeCount?: string;
    dislikeCount?: string;
    favoriteCount?: string;
    commentCount?: string;
  };
}
