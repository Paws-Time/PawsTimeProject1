/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * BASIC PAWSTIME API
 * OpenAPI spec version: v1
 */

export type ApiResponseLongStatus =
  (typeof ApiResponseLongStatus)[keyof typeof ApiResponseLongStatus];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const ApiResponseLongStatus = {
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