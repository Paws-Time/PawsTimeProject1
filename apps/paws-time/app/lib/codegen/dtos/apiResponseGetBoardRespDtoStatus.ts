/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * BASIC PAWSTIME API
 * OpenAPI spec version: v1
 */

export type ApiResponseGetBoardRespDtoStatus =
  (typeof ApiResponseGetBoardRespDtoStatus)[keyof typeof ApiResponseGetBoardRespDtoStatus];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const ApiResponseGetBoardRespDtoStatus = {
  SUCCESS: "SUCCESS",
  CREATE: "CREATE",
  UPDATE: "UPDATE",
  DELETE: "DELETE",
  INVALID: "INVALID",
  DUPLICATE: "DUPLICATE",
  NOTFOUND: "NOTFOUND",
  UNAUTHORIZED: "UNAUTHORIZED",
  FORBIDDEN: "FORBIDDEN",
  ERROR: "ERROR",
} as const;