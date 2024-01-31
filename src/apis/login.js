import axios from "axios";

// login 함수 정의: 사용자의 아이디와 비밀번호를 받아와 서버에 로그인 요청을 보냄
export const login = async (id, pw) => {
  try {
    // 서버에 POST 요청을 보내 로그인을 시도하고 결과를 받아옴
    const result = await axios.post('http://front.cau-likelion.org', { id, pw });

    // 로그인 성공 시 서버에서 반환한 데이터(data) 중 'data' 속성을 반환
    return result.data.data;
  } catch (error) {
    // 로그인 실패 시 예외 처리: 여기서는 간단하게 예외를 그대로 다시 던져줌
    throw error;
  }
};
