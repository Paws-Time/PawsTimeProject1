import axios from "axios";

const BASE_URL = "http://43.200.46.13:8080";

export const fetchBoards = async (
  pageNo = 0,
  pageSize = 10,
  sortBy = "createdAt",
  direction = "DESC"
) => {
  try {
    const response = await axios.get(`${BASE_URL}/board/list`, {
      params: { pageNo, pageSize, sortBy, direction },
    });
    return response.data.data; // 데이터 리스트 반환
  } catch (error) {
    console.error("Error fetching boards:", error);
    throw error;
  }
};
