/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * BASIC PAWSTIME API
 * OpenAPI spec version: v1
 */
import { useMutation } from "@tanstack/react-query";
import type {
  MutationFunction,
  UseMutationOptions,
  UseMutationResult,
} from "@tanstack/react-query";
import type { ApiResponseVoid, CreatePost2ReqDto } from "../../dtos";
import { customInstance } from "../../../axios-client/customClient";
import type { ErrorType, BodyType } from "../../../axios-client/customClient";

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1];

/**
 * 게시글을 생성 할 수 있습니다.
 * @summary 게시글 생성
 */
export const createPost2 = (
  createPost2ReqDto: BodyType<CreatePost2ReqDto>,
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal,
) => {
  const formData = new FormData();
  formData.append("title", createPost2ReqDto.title);
  formData.append("content", createPost2ReqDto.content);
  if (createPost2ReqDto.boardId !== undefined) {
    formData.append("boardId", createPost2ReqDto.boardId.toString());
  }
  if (createPost2ReqDto.name !== undefined) {
    formData.append("name", createPost2ReqDto.name);
  }
  if (createPost2ReqDto.address !== undefined) {
    formData.append("address", createPost2ReqDto.address);
  }
  if (createPost2ReqDto.latitude !== undefined) {
    formData.append("latitude", createPost2ReqDto.latitude.toString());
  }
  if (createPost2ReqDto.longitude !== undefined) {
    formData.append("longitude", createPost2ReqDto.longitude.toString());
  }
  if (createPost2ReqDto.category !== undefined) {
    formData.append("category", createPost2ReqDto.category);
  }
  if (createPost2ReqDto.regionCode !== undefined) {
    formData.append("regionCode", createPost2ReqDto.regionCode.toString());
  }

  return customInstance<ApiResponseVoid>(
    {
      url: `/post2`,
      method: "POST",
      headers: { "Content-Type": "multipart/form-data" },
      data: formData,
      signal,
    },
    options,
  );
};

export const getCreatePost2MutationOptions = <
  TError = ErrorType<unknown>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof createPost2>>,
    TError,
    { data: BodyType<CreatePost2ReqDto> },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof createPost2>>,
  TError,
  { data: BodyType<CreatePost2ReqDto> },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof createPost2>>,
    { data: BodyType<CreatePost2ReqDto> }
  > = (props) => {
    const { data } = props ?? {};

    return createPost2(data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type CreatePost2MutationResult = NonNullable<
  Awaited<ReturnType<typeof createPost2>>
>;
export type CreatePost2MutationBody = BodyType<CreatePost2ReqDto>;
export type CreatePost2MutationError = ErrorType<unknown>;

/**
 * @summary 게시글 생성
 */
export const useCreatePost2 = <
  TError = ErrorType<unknown>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof createPost2>>,
    TError,
    { data: BodyType<CreatePost2ReqDto> },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationResult<
  Awaited<ReturnType<typeof createPost2>>,
  TError,
  { data: BodyType<CreatePost2ReqDto> },
  TContext
> => {
  const mutationOptions = getCreatePost2MutationOptions(options);

  return useMutation(mutationOptions);
};