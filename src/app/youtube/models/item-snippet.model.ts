import { SnippetThumbnailData } from './snippet-thumbnail-data.model';

export interface ItemSnippet {
  publishedAt?: string;
  channelId?: string;
  title?: string;
  description?: string;
  thumbnails?: {
    default?: SnippetThumbnailData;
    medium?: SnippetThumbnailData;
    high?: SnippetThumbnailData;
    standard?: SnippetThumbnailData;
    maxres?: SnippetThumbnailData;
  };
  channelTitle?: string;
  tags?: Array<string>;
  categoryId?: string;
  liveBroadcastContent?: string;
  defaultLanguage?: string;
  localized?: {
    title?: string;
    description?: string;
  };
  defaultAudioLanguage?: string;
}
