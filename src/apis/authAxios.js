import axios from "axios";
import { getNewREfreshToken } from "./refresh";

// getAuthAxios 함수 정의: 토큰을 포함한 Axios 인스턴스를 생성
export const getAuthAxios = (token) => {
  const authAxios = axios.create({
    baseURL: 'http://front.cau-likelion.org',
    headers: {
      Authorization: token,
    },
  });

  // 인터셉터를 사용하여 401 에러 발생 시 토큰을 갱신하고 재시도
  authAxios.interceptors.response.use(
    (res) => res,
    async (error) => {
      if (error.response.status === 401) {
        const { accessToken, refreshToken } = await getNewREfreshToken();
        error.config.headers.Authorization = accessToken;
        localStorage.setItem('access', accessToken);
        localStorage.setItem('refresh', refreshToken);
        return (await axios.get(error.config.url, error.config)).data;
      }
    }
  );

  return authAxios;
};
