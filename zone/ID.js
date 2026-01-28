const form = document.getElementById("signupForm");
const message = document.getElementById("message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const userId = document.getElementById("userId").value;
  const userPw = document.getElementById("userPw").value;

  // 아이디 검사
  if (userId.length < 6) {
    message.textContent = "아이디는 6글자 이상이어야 합니다.";
    return;
  }

  // 비밀번호 검사
  if (userPw.length < 8) {
    message.textContent = "비밀번호는 8글자 이상이어야합니다.";
    return;
  }

  message.textContent = "회원가입 성공!";
});