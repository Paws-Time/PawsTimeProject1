/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * BASIC PAWSTIME API
 * OpenAPI spec version: v1
 */

export type ApiResponseGetDetailPostRespDtoStatus =
  (typeof ApiResponseGetDetailPostRespDtoStatus)[keyof typeof ApiResponseGetDetailPostRespDtoStatus];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const ApiResponseGetDetailPostRespDtoStatus = {
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
