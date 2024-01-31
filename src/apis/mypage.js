import { getAuthAxios } from "./authAxios";

// getMyPage 함수 정의: 인증된 Axios를 사용하여 마이페이지 데이터를 가져옴
export const getMyPage = async () => {
  const access = localStorage.getItem('access');
  const authAxios = getAuthAxios(access);
  const result = await authAxios.get('/mypage');
  return result.data;
};
