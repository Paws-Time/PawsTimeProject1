/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * BASIC PAWSTIME API
 * OpenAPI spec version: v1
 */

export type ApiResponseStringStatus =
  (typeof ApiResponseStringStatus)[keyof typeof ApiResponseStringStatus];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const ApiResponseStringStatus = {
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