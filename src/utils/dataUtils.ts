import { PageParams, PageRequestParams } from '@/interface';
import { omit } from 'lodash-es';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function toPageRequestParams<T = Record<string, any>>(pageParams: PageParams & T): PageRequestParams & Omit<T, 'current' | 'pageSize'> {
  return {
    ...omit(pageParams, 'current', 'pageSize'),
    page: pageParams.current ? pageParams.current - 1 : 0,
    size: pageParams.pageSize || 20,
  };
}