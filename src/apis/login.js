import axios from "axios";

export const login = async (id, pw) => {
  const result = await axios.post('http://front.cau-likelion.org', { id, pw }) // 바디에 id, pw 넣어줌
  return result.data.data
}