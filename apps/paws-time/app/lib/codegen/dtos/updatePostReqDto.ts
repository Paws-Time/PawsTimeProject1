/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * BASIC PAWSTIME API
 * OpenAPI spec version: v1
 */

export interface UpdatePostReqDto {
  /** 게시글 내용 */
  content: string;
  /** 삭제할 이미지 ID 목록 */
  deletedImageIds?: number[];
  /** 추가할 이미지 파일 */
  newImages?: Blob[];
  /** 게시글 제목 */
  title: string;
}
