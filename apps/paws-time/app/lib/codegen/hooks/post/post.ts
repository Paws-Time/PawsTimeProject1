/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * BASIC PAWSTIME API
 * OpenAPI spec version: v1
 */
import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query";
import type {
  MutationFunction,
  QueryFunction,
  QueryKey,
  UseInfiniteQueryOptions,
  UseInfiniteQueryResult,
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  ApiResponseGetDetailPostRespDto,
  ApiResponseInteger,
  ApiResponseListGetListPostRespDto,
  ApiResponseVoid,
  CreatePostReqDto,
  GetPostsParams,
  UpdatePostReqDto,
} from "../../dtos";
import { customInstance } from "../../../axios-client/customClient";
import type { ErrorType, BodyType } from "../../../axios-client/customClient";

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1];

/**
 * 게시글 ID로 상세 조회를 할 수 있습니다.
 * @summary 게시글 상세 조회
 */
export const getDetailPost = (
  postId: number,
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal,
) => {
  return customInstance<ApiResponseGetDetailPostRespDto>(
    { url: `/post/${postId}`, method: "GET", signal },
    options,
  );
};

export const getGetDetailPostQueryKey = (postId: number) => {
  return [`/post/${postId}`] as const;
};

export const getGetDetailPostInfiniteQueryOptions = <
  TData = Awaited<ReturnType<typeof getDetailPost>>,
  TError = ErrorType<unknown>,
>(
  postId: number,
  options?: {
    query?: UseInfiniteQueryOptions<
      Awaited<ReturnType<typeof getDetailPost>>,
      TError,
      TData
    >;
    request?: SecondParameter<typeof customInstance>;
  },
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetDetailPostQueryKey(postId);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getDetailPost>>> = ({
    signal,
  }) => getDetailPost(postId, requestOptions, signal);

  return {
    queryKey,
    queryFn,
    enabled: !!postId,
    ...queryOptions,
  } as UseInfiniteQueryOptions<
    Awaited<ReturnType<typeof getDetailPost>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type GetDetailPostInfiniteQueryResult = NonNullable<
  Awaited<ReturnType<typeof getDetailPost>>
>;
export type GetDetailPostInfiniteQueryError = ErrorType<unknown>;

/**
 * @summary 게시글 상세 조회
 */

export function useGetDetailPostInfinite<
  TData = Awaited<ReturnType<typeof getDetailPost>>,
  TError = ErrorType<unknown>,
>(
  postId: number,
  options?: {
    query?: UseInfiniteQueryOptions<
      Awaited<ReturnType<typeof getDetailPost>>,
      TError,
      TData
    >;
    request?: SecondParameter<typeof customInstance>;
  },
): UseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey } {
  const queryOptions = getGetDetailPostInfiniteQueryOptions(postId, options);

  const query = useInfiniteQuery(queryOptions) as UseInfiniteQueryResult<
    TData,
    TError
  > & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey;

  return query;
}

export const getGetDetailPostQueryOptions = <
  TData = Awaited<ReturnType<typeof getDetailPost>>,
  TError = ErrorType<unknown>,
>(
  postId: number,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof getDetailPost>>,
      TError,
      TData
    >;
    request?: SecondParameter<typeof customInstance>;
  },
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetDetailPostQueryKey(postId);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getDetailPost>>> = ({
    signal,
  }) => getDetailPost(postId, requestOptions, signal);

  return {
    queryKey,
    queryFn,
    enabled: !!postId,
    ...queryOptions,
  } as UseQueryOptions<
    Awaited<ReturnType<typeof getDetailPost>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type GetDetailPostQueryResult = NonNullable<
  Awaited<ReturnType<typeof getDetailPost>>
>;
export type GetDetailPostQueryError = ErrorType<unknown>;

/**
 * @summary 게시글 상세 조회
 */

export function useGetDetailPost<
  TData = Awaited<ReturnType<typeof getDetailPost>>,
  TError = ErrorType<unknown>,
>(
  postId: number,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof getDetailPost>>,
      TError,
      TData
    >;
    request?: SecondParameter<typeof customInstance>;
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
  const queryOptions = getGetDetailPostQueryOptions(postId, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
}

/**
 * 게시글을 수정할 수 있습니다.
 * @summary 게시글 수정
 */
export const updatePost = (
  postId: number,
  updatePostReqDto: BodyType<UpdatePostReqDto>,
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<ApiResponseVoid>(
    {
      url: `/post/${postId}`,
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      data: updatePostReqDto,
    },
    options,
  );
};

export const getUpdatePostMutationOptions = <
  TError = ErrorType<unknown>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof updatePost>>,
    TError,
    { postId: number; data: BodyType<UpdatePostReqDto> },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof updatePost>>,
  TError,
  { postId: number; data: BodyType<UpdatePostReqDto> },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof updatePost>>,
    { postId: number; data: BodyType<UpdatePostReqDto> }
  > = (props) => {
    const { postId, data } = props ?? {};

    return updatePost(postId, data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type UpdatePostMutationResult = NonNullable<
  Awaited<ReturnType<typeof updatePost>>
>;
export type UpdatePostMutationBody = BodyType<UpdatePostReqDto>;
export type UpdatePostMutationError = ErrorType<unknown>;

/**
 * @summary 게시글 수정
 */
export const useUpdatePost = <
  TError = ErrorType<unknown>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof updatePost>>,
    TError,
    { postId: number; data: BodyType<UpdatePostReqDto> },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationResult<
  Awaited<ReturnType<typeof updatePost>>,
  TError,
  { postId: number; data: BodyType<UpdatePostReqDto> },
  TContext
> => {
  const mutationOptions = getUpdatePostMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * 게시글을 삭제할 수 있습니다.
 * @summary 게시글 삭제
 */
export const deletePost = (
  postId: number,
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<ApiResponseVoid>(
    { url: `/post/${postId}`, method: "DELETE" },
    options,
  );
};

export const getDeletePostMutationOptions = <
  TError = ErrorType<unknown>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof deletePost>>,
    TError,
    { postId: number },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof deletePost>>,
  TError,
  { postId: number },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof deletePost>>,
    { postId: number }
  > = (props) => {
    const { postId } = props ?? {};

    return deletePost(postId, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type DeletePostMutationResult = NonNullable<
  Awaited<ReturnType<typeof deletePost>>
>;

export type DeletePostMutationError = ErrorType<unknown>;

/**
 * @summary 게시글 삭제
 */
export const useDeletePost = <
  TError = ErrorType<unknown>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof deletePost>>,
    TError,
    { postId: number },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationResult<
  Awaited<ReturnType<typeof deletePost>>,
  TError,
  { postId: number },
  TContext
> => {
  const mutationOptions = getDeletePostMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * 게시글 목록 조회를 할 수 있습니다.
 * @summary 게시글 목록 조회
 */
export const getPosts = (
  params?: GetPostsParams,
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal,
) => {
  return customInstance<ApiResponseListGetListPostRespDto>(
    { url: `/post`, method: "GET", params, signal },
    options,
  );
};

export const getGetPostsQueryKey = (params?: GetPostsParams) => {
  return [`/post`, ...(params ? [params] : [])] as const;
};

export const getGetPostsInfiniteQueryOptions = <
  TData = Awaited<ReturnType<typeof getPosts>>,
  TError = ErrorType<unknown>,
>(
  params?: GetPostsParams,
  options?: {
    query?: UseInfiniteQueryOptions<
      Awaited<ReturnType<typeof getPosts>>,
      TError,
      TData
    >;
    request?: SecondParameter<typeof customInstance>;
  },
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetPostsQueryKey(params);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getPosts>>> = ({
    signal,
  }) => getPosts(params, requestOptions, signal);

  return { queryKey, queryFn, ...queryOptions } as UseInfiniteQueryOptions<
    Awaited<ReturnType<typeof getPosts>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type GetPostsInfiniteQueryResult = NonNullable<
  Awaited<ReturnType<typeof getPosts>>
>;
export type GetPostsInfiniteQueryError = ErrorType<unknown>;

/**
 * @summary 게시글 목록 조회
 */

export function useGetPostsInfinite<
  TData = Awaited<ReturnType<typeof getPosts>>,
  TError = ErrorType<unknown>,
>(
  params?: GetPostsParams,
  options?: {
    query?: UseInfiniteQueryOptions<
      Awaited<ReturnType<typeof getPosts>>,
      TError,
      TData
    >;
    request?: SecondParameter<typeof customInstance>;
  },
): UseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey } {
  const queryOptions = getGetPostsInfiniteQueryOptions(params, options);

  const query = useInfiniteQuery(queryOptions) as UseInfiniteQueryResult<
    TData,
    TError
  > & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey;

  return query;
}

export const getGetPostsQueryOptions = <
  TData = Awaited<ReturnType<typeof getPosts>>,
  TError = ErrorType<unknown>,
>(
  params?: GetPostsParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof getPosts>>,
      TError,
      TData
    >;
    request?: SecondParameter<typeof customInstance>;
  },
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetPostsQueryKey(params);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getPosts>>> = ({
    signal,
  }) => getPosts(params, requestOptions, signal);

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getPosts>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type GetPostsQueryResult = NonNullable<
  Awaited<ReturnType<typeof getPosts>>
>;
export type GetPostsQueryError = ErrorType<unknown>;

/**
 * @summary 게시글 목록 조회
 */

export function useGetPosts<
  TData = Awaited<ReturnType<typeof getPosts>>,
  TError = ErrorType<unknown>,
>(
  params?: GetPostsParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof getPosts>>,
      TError,
      TData
    >;
    request?: SecondParameter<typeof customInstance>;
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
  const queryOptions = getGetPostsQueryOptions(params, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
}

/**
 * 게시글을 생성 할 수 있습니다.
 * @summary 게시글 생성
 */
export const createPost = (
  createPostReqDto: BodyType<CreatePostReqDto>,
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal,
) => {
  return customInstance<ApiResponseVoid>(
    {
      url: `/post`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: createPostReqDto,
      signal,
    },
    options,
  );
};

export const getCreatePostMutationOptions = <
  TError = ErrorType<unknown>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof createPost>>,
    TError,
    { data: BodyType<CreatePostReqDto> },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof createPost>>,
  TError,
  { data: BodyType<CreatePostReqDto> },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof createPost>>,
    { data: BodyType<CreatePostReqDto> }
  > = (props) => {
    const { data } = props ?? {};

    return createPost(data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type CreatePostMutationResult = NonNullable<
  Awaited<ReturnType<typeof createPost>>
>;
export type CreatePostMutationBody = BodyType<CreatePostReqDto>;
export type CreatePostMutationError = ErrorType<unknown>;

/**
 * @summary 게시글 생성
 */
export const useCreatePost = <
  TError = ErrorType<unknown>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof createPost>>,
    TError,
    { data: BodyType<CreatePostReqDto> },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationResult<
  Awaited<ReturnType<typeof createPost>>,
  TError,
  { data: BodyType<CreatePostReqDto> },
  TContext
> => {
  const mutationOptions = getCreatePostMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * 게시글에 좋아요를 누를 수 있습니다.
 * @summary 좋아요
 */
export const toggleLike = (
  postId: number,
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal,
) => {
  return customInstance<ApiResponseInteger>(
    { url: `/post/${postId}/like`, method: "POST", signal },
    options,
  );
};

export const getToggleLikeMutationOptions = <
  TError = ErrorType<unknown>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof toggleLike>>,
    TError,
    { postId: number },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof toggleLike>>,
  TError,
  { postId: number },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof toggleLike>>,
    { postId: number }
  > = (props) => {
    const { postId } = props ?? {};

    return toggleLike(postId, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type ToggleLikeMutationResult = NonNullable<
  Awaited<ReturnType<typeof toggleLike>>
>;

export type ToggleLikeMutationError = ErrorType<unknown>;

/**
 * @summary 좋아요
 */
export const useToggleLike = <
  TError = ErrorType<unknown>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof toggleLike>>,
    TError,
    { postId: number },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationResult<
  Awaited<ReturnType<typeof toggleLike>>,
  TError,
  { postId: number },
  TContext
> => {
  const mutationOptions = getToggleLikeMutationOptions(options);

  return useMutation(mutationOptions);
};
