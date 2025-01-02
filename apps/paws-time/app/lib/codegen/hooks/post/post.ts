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
  ApiResponseListGetImageRespDto,
  ApiResponseListGetListPostRespDto,
  ApiResponseLong,
  ApiResponseVoid,
  CreatePostReqDto,
  GetPostsParams,
  UpdatePostReqDto,
  UploadImagesBody,
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
  signal?: AbortSignal
) => {
  return customInstance<ApiResponseGetDetailPostRespDto>(
    { url: `/post/${postId}`, method: "GET", signal },
    options
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
  }
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
  }
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
  }
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
  }
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
  options?: SecondParameter<typeof customInstance>
) => {
  return customInstance<ApiResponseVoid>(
    {
      url: `/post/${postId}`,
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      data: updatePostReqDto,
    },
    options
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
 * 이미지 업로드 후 게시글과 연결합니다.
 * @summary 게시글 이미지 업로드
 */
export const uploadImages = (
  postId: number,
  uploadImagesBody: BodyType<UploadImagesBody>,
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal
) => {
  const formData = new FormData();
  uploadImagesBody.images.forEach((value) => formData.append("images", value));

  return customInstance<ApiResponseVoid>(
    {
      url: `/post/${postId}`,
      method: "POST",
      headers: { "Content-Type": "multipart/form-data" },
      data: formData,
      signal,
    },
    options
  );
};

export const getUploadImagesMutationOptions = <
  TError = ErrorType<unknown>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof uploadImages>>,
    TError,
    { postId: number; data: BodyType<UploadImagesBody> },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof uploadImages>>,
  TError,
  { postId: number; data: BodyType<UploadImagesBody> },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof uploadImages>>,
    { postId: number; data: BodyType<UploadImagesBody> }
  > = (props) => {
    const { postId, data } = props ?? {};

    return uploadImages(postId, data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type UploadImagesMutationResult = NonNullable<
  Awaited<ReturnType<typeof uploadImages>>
>;
export type UploadImagesMutationBody = BodyType<UploadImagesBody>;
export type UploadImagesMutationError = ErrorType<unknown>;

/**
 * @summary 게시글 이미지 업로드
 */
export const useUploadImages = <
  TError = ErrorType<unknown>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof uploadImages>>,
    TError,
    { postId: number; data: BodyType<UploadImagesBody> },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationResult<
  Awaited<ReturnType<typeof uploadImages>>,
  TError,
  { postId: number; data: BodyType<UploadImagesBody> },
  TContext
> => {
  const mutationOptions = getUploadImagesMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * 게시글을 삭제할 수 있습니다.
 * @summary 게시글 삭제
 */
export const deletePost = (
  postId: number,
  options?: SecondParameter<typeof customInstance>
) => {
  return customInstance<ApiResponseVoid>(
    { url: `/post/${postId}`, method: "DELETE" },
    options
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
  signal?: AbortSignal
) => {
  return customInstance<ApiResponseListGetListPostRespDto>(
    { url: `/post`, method: "GET", params, signal },
    options
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
  }
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
  }
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
  }
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
  }
): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
  const queryOptions = getGetPostsQueryOptions(params, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
}

/**
 * 게시글을 생성할 수 있습니다.
 * @summary 게시글 생성
 */
export const createPost = (
  createPostReqDto: BodyType<CreatePostReqDto>,
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal
) => {
  return customInstance<ApiResponseLong>(
    {
      url: `/post`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: createPostReqDto,
      signal,
    },
    options
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
  signal?: AbortSignal
) => {
  return customInstance<ApiResponseInteger>(
    { url: `/post/${postId}/likes`, method: "POST", signal },
    options
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
/**
 * @summary 게시글별 대표 이미지 조회
 */
export const getThumbnail = (
  postId: number,
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal
) => {
  return customInstance<ApiResponseListGetImageRespDto>(
    { url: `/post/${postId}/thumbnail`, method: "GET", signal },
    options
  );
};

export const getGetThumbnailQueryKey = (postId: number) => {
  return [`/post/${postId}/thumbnail`] as const;
};

export const getGetThumbnailInfiniteQueryOptions = <
  TData = Awaited<ReturnType<typeof getThumbnail>>,
  TError = ErrorType<unknown>,
>(
  postId: number,
  options?: {
    query?: UseInfiniteQueryOptions<
      Awaited<ReturnType<typeof getThumbnail>>,
      TError,
      TData
    >;
    request?: SecondParameter<typeof customInstance>;
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetThumbnailQueryKey(postId);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getThumbnail>>> = ({
    signal,
  }) => getThumbnail(postId, requestOptions, signal);

  return {
    queryKey,
    queryFn,
    enabled: !!postId,
    ...queryOptions,
  } as UseInfiniteQueryOptions<
    Awaited<ReturnType<typeof getThumbnail>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type GetThumbnailInfiniteQueryResult = NonNullable<
  Awaited<ReturnType<typeof getThumbnail>>
>;
export type GetThumbnailInfiniteQueryError = ErrorType<unknown>;

/**
 * @summary 게시글별 대표 이미지 조회
 */

export function useGetThumbnailInfinite<
  TData = Awaited<ReturnType<typeof getThumbnail>>,
  TError = ErrorType<unknown>,
>(
  postId: number,
  options?: {
    query?: UseInfiniteQueryOptions<
      Awaited<ReturnType<typeof getThumbnail>>,
      TError,
      TData
    >;
    request?: SecondParameter<typeof customInstance>;
  }
): UseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey } {
  const queryOptions = getGetThumbnailInfiniteQueryOptions(postId, options);

  const query = useInfiniteQuery(queryOptions) as UseInfiniteQueryResult<
    TData,
    TError
  > & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey;

  return query;
}

export const getGetThumbnailQueryOptions = <
  TData = Awaited<ReturnType<typeof getThumbnail>>,
  TError = ErrorType<unknown>,
>(
  postId: number,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof getThumbnail>>,
      TError,
      TData
    >;
    request?: SecondParameter<typeof customInstance>;
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetThumbnailQueryKey(postId);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getThumbnail>>> = ({
    signal,
  }) => getThumbnail(postId, requestOptions, signal);

  return {
    queryKey,
    queryFn,
    enabled: !!postId,
    ...queryOptions,
  } as UseQueryOptions<
    Awaited<ReturnType<typeof getThumbnail>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type GetThumbnailQueryResult = NonNullable<
  Awaited<ReturnType<typeof getThumbnail>>
>;
export type GetThumbnailQueryError = ErrorType<unknown>;

/**
 * @summary 게시글별 대표 이미지 조회
 */

export function useGetThumbnail<
  TData = Awaited<ReturnType<typeof getThumbnail>>,
  TError = ErrorType<unknown>,
>(
  postId: number,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof getThumbnail>>,
      TError,
      TData
    >;
    request?: SecondParameter<typeof customInstance>;
  }
): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
  const queryOptions = getGetThumbnailQueryOptions(postId, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
}
