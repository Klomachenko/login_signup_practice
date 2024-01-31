import axios from "axios";

// signUp 함수 정의: 사용자 정보를 받아와 서버에 회원가입 요청을 보냄
export const signUp = async (id, pw, name, age) => {
  const result = await axios.post('http://front.cau-likelion.org/signup', {
    id,
    pw,
    name,
    age,
  });
  return result.data;
};