import { ItemSnippet } from './item-snippet.model';

export interface SearchItemModel {
  kind: string;
  etag: string;
  id: string;
  snippet: ItemSnippet;
  statistics: {
    viewCount: string;
    likeCount: string;
    dislikeCount: string;
    favoriteCount: string;
    commentCount: string;
  };
}
