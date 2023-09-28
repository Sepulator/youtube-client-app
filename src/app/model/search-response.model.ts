import { ItemsEntity } from './search-item.model';

export interface Response {
  kind: string;
  etag: string;
  pageInfo: PageInfo;
  items?: ItemsEntity[] | null;
}
export interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}
