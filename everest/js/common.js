const btn = document.getElementById("btn");
const menu = document.querySelector(".menu");
// const close = btn.querySelector("i"); 아래와 같은 뜻의 코드
const close = document.querySelector(".bars i");

btn.addEventListener("click", () => {
  console.log("cliked!!~!!");
  menu.classList.toggle("active");
  close.classList.toggle("uil-multiply");
});

// js는 css랑 조금 다른 개념으로 HTML에 엮이지 않고 독자적인 부분이 있다.
