  /**
   * Generated by orval v7.3.0 🍺
   * Do not edit manually.
   * BASIC PAWSTIME API
   * OpenAPI spec version: v1
   */

  export interface CreatePostReqDto {
    boardId: number;
    /** 게시글 내용 */
    content: string;
    likesCount?: number;
    /** 게시글 제목 */
    title: string;
  }
