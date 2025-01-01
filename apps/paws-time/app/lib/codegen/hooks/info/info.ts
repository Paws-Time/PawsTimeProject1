/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * BASIC PAWSTIME API
 * OpenAPI spec version: v1
 */
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import type {
  QueryFunction,
  QueryKey,
  UseInfiniteQueryOptions,
  UseInfiniteQueryResult,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  ApiResponseListGetHospitalInfoRespDto,
  GetHospitalInfoParams,
} from "../../dtos";
import { customInstance } from "../../../axios-client/customClient";
import type { ErrorType } from "../../../axios-client/customClient";

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1];

/**
 * @summary 동물병원 정보 목록 조회
 */
export const getHospitalInfo = (
  addNum: number,
  params?: GetHospitalInfoParams,
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal,
) => {
  return customInstance<ApiResponseListGetHospitalInfoRespDto>(
    { url: `/info/${addNum}`, method: "GET", params, signal },
    options,
  );
};

export const getGetHospitalInfoQueryKey = (
  addNum: number,
  params?: GetHospitalInfoParams,
) => {
  return [`/info/${addNum}`, ...(params ? [params] : [])] as const;
};

export const getGetHospitalInfoInfiniteQueryOptions = <
  TData = Awaited<ReturnType<typeof getHospitalInfo>>,
  TError = ErrorType<unknown>,
>(
  addNum: number,
  params?: GetHospitalInfoParams,
  options?: {
    query?: UseInfiniteQueryOptions<
      Awaited<ReturnType<typeof getHospitalInfo>>,
      TError,
      TData
    >;
    request?: SecondParameter<typeof customInstance>;
  },
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getGetHospitalInfoQueryKey(addNum, params);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getHospitalInfo>>> = ({
    signal,
  }) => getHospitalInfo(addNum, params, requestOptions, signal);

  return {
    queryKey,
    queryFn,
    enabled: !!addNum,
    ...queryOptions,
  } as UseInfiniteQueryOptions<
    Awaited<ReturnType<typeof getHospitalInfo>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type GetHospitalInfoInfiniteQueryResult = NonNullable<
  Awaited<ReturnType<typeof getHospitalInfo>>
>;
export type GetHospitalInfoInfiniteQueryError = ErrorType<unknown>;

/**
 * @summary 동물병원 정보 목록 조회
 */

export function useGetHospitalInfoInfinite<
  TData = Awaited<ReturnType<typeof getHospitalInfo>>,
  TError = ErrorType<unknown>,
>(
  addNum: number,
  params?: GetHospitalInfoParams,
  options?: {
    query?: UseInfiniteQueryOptions<
      Awaited<ReturnType<typeof getHospitalInfo>>,
      TError,
      TData
    >;
    request?: SecondParameter<typeof customInstance>;
  },
): UseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey } {
  const queryOptions = getGetHospitalInfoInfiniteQueryOptions(
    addNum,
    params,
    options,
  );

  const query = useInfiniteQuery(queryOptions) as UseInfiniteQueryResult<
    TData,
    TError
  > & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey;

  return query;
}

export const getGetHospitalInfoQueryOptions = <
  TData = Awaited<ReturnType<typeof getHospitalInfo>>,
  TError = ErrorType<unknown>,
>(
  addNum: number,
  params?: GetHospitalInfoParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof getHospitalInfo>>,
      TError,
      TData
    >;
    request?: SecondParameter<typeof customInstance>;
  },
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getGetHospitalInfoQueryKey(addNum, params);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getHospitalInfo>>> = ({
    signal,
  }) => getHospitalInfo(addNum, params, requestOptions, signal);

  return {
    queryKey,
    queryFn,
    enabled: !!addNum,
    ...queryOptions,
  } as UseQueryOptions<
    Awaited<ReturnType<typeof getHospitalInfo>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type GetHospitalInfoQueryResult = NonNullable<
  Awaited<ReturnType<typeof getHospitalInfo>>
>;
export type GetHospitalInfoQueryError = ErrorType<unknown>;

/**
 * @summary 동물병원 정보 목록 조회
 */

export function useGetHospitalInfo<
  TData = Awaited<ReturnType<typeof getHospitalInfo>>,
  TError = ErrorType<unknown>,
>(
  addNum: number,
  params?: GetHospitalInfoParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof getHospitalInfo>>,
      TError,
      TData
    >;
    request?: SecondParameter<typeof customInstance>;
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
  const queryOptions = getGetHospitalInfoQueryOptions(addNum, params, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
}