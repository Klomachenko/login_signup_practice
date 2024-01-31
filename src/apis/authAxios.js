import axios from "axios";
import { getNewREfreshToken } from "./refresh";

export const getAuthAxios = (token) => {
  const authAxios = axios.create({
    baseURL: 'http://front.cau-likelion.org',
    headers: {
      Authorization: token,
    },
  })
  authAxios.interceptors.response.use(
    (res) => res,
    async (error) => {
      if (error.response.status === 401) {
        // 토큰이 만료된 경우
        const { accessToken, refreshToken } = await getNewREfreshToken()
        error.config.headers.Authorization = accessToken;
        localStorage.setItem('access', accessToken)
        localStorage.setItem('refresh', refreshToken)
        return (await axios.get(error.config.url, error.config)).data;
        // 마지막으로 요청했던 API 처리 -> 검색해라 멍청아
      }
    }
  )
  return authAxios
}