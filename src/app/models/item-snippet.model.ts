import { SnippetThumbnailDataModel } from './snippet-thumbnail-data.model';

export interface ItemSnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: {
    default: SnippetThumbnailDataModel;
    medium: SnippetThumbnailDataModel;
    high: SnippetThumbnailDataModel;
    standard: SnippetThumbnailDataModel;
    maxres: SnippetThumbnailDataModel;
  };
  channelTitle: string;
  tags: Array<string>;
  categoryId: string;
  liveBroadcastContent: string;
  defaultLanguage?: string;
  localized: {
    title: string;
    description: string;
  };
  defaultAudioLanguage: string;
}
