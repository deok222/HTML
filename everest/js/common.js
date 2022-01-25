const btn = document.getElementById("btn");
const menu = document.querySelector(".menu");
// const close = btn.querySelector("i"); 아래와 같은 뜻의 코드
const close = document.querySelector(".bars i");

// uil-multiply

btn.addEventListener("click", () => {
  console.log("cliked!!~!!");
  menu.classList.toggle("active");
  close.classList.toggle("uil-multiply");
});
