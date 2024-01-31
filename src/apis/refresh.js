import axios from "axios"



export const getNewREfreshToken = async () => {
  const accessToken = localStorage.getItem('access')
  const refreshToken = localStorage.getItem('refesh')
  const result = await axios.post(
    'http://front.cau-likelion.org/refresh',
    {
      refreshToken,
    },
    {
      headers: {
        Authorization: accessToken,
      },
    }
  );
  return result.data;
}