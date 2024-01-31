import axios from "axios";

// getNewREfreshToken 함수 정의: access 토큰을 사용하여 새로운 토큰을 가져옴
export const getNewREfreshToken = async () => {
  const accessToken = localStorage.getItem('access');
  const refreshToken = localStorage.getItem('refesh'); // 오타 수정: 'refresh'로 변경
  const result = await axios.post(
    'http://front.cau-likelion.org/refresh',
    { refreshToken },
    {
      headers: {
        Authorization: accessToken,
      },
    }
  );
  return result.data;
};