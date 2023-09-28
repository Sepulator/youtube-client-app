export interface ItemsEntity {
  kind: string;
  etag: string;
  id: string;
  snippet: Snippet;
  statistics: Statistics;
}
export interface Snippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
  tags: string[];
  categoryId: string;
  liveBroadcastContent: string;
  localized: Localized;
  defaultAudioLanguage: string;
}
export interface Thumbnails {
  default: ThumbnailsEntity;
  medium: ThumbnailsEntity;
  high: ThumbnailsEntity;
  standard: ThumbnailsEntity;
  maxres: ThumbnailsEntity;
}
export interface ThumbnailsEntity {
  url: string;
  width: number;
  height: number;
}
export interface Localized {
  title: string;
  description: string;
}
export interface Statistics {
  viewCount: string;
  likeCount: string;
  dislikeCount: string;
  favoriteCount: string;
  commentCount: string;
}
