export enum RequestTypes {
  refresh = 'refresh',
  loadMore = 'loadMore',
}

export type RequestPaginateParams = {
  limit?: number;
  page: number;
};

export type RequestFilterParams = {};

export type RequestData = RequestPaginateParams & RequestFilterParams;

interface Pagination {
  page: number;
  limit: number;
  page_size: number;
}

export interface ResponseData<T extends string, K> {
  message: string;
  data: {
    [key in T]: K;
  } & { pagination: Pagination };
}
