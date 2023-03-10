let screen = document.querySelector(".input-screen");
let btn = document.querySelectorAll(".btn");
// let toggle = document.querySelector(".ball");
let p1 = document.querySelector(".p1");
let p2 = document.querySelector(".p2");
let p3 = document.querySelector(".p3");
let toggle = document.querySelector(".p0");
let btnContainer = document.querySelector(".btn-container");

btn.forEach(function (b) {
  b.addEventListener("click", function () {
    if (b.classList.contains("num")) {
      screen.value += b.innerHTML;
      console.log(screen.value);
    }

    if (b.classList.contains("del")) {
      screen.value = screen.value.slice(0, screen.value.length - 1);
      console.log(screen.value);
      // console.log(b, "click");
    }

    if (b.classList.contains("reset")) {
      screen.value = "";
      console.log("click");
    }
    if (b.classList.contains("mult")) {
      screen.value += "*";
    }

    if (b.classList.contains("equal")) {
      screen.value = eval(screen.value);
    }
  });
});

//First toggle color effect
p1.addEventListener("click", function () {
  toggle.classList.add("one");
  toggle.classList.remove("two");
  toggle.classList.remove("three");

  document.querySelector("main").style.backgroundColor = "#3a4764";
  screen.style.backgroundColor = "#182034";
  screen.style.color = "#fff";
  btn.forEach(function (b) {
    b.style.color = "hsl(60, 10%, 19%)";
    b.style.backgroundColor = "#eae3dc";
    b.style.boxShadow = "0px 2px 0px hsl(28, 16%, 65%)";
  });
  btnContainer.style.backgroundColor = "#232c43";
  document.querySelector(".upper-item").style.color = "#fff";
  toggle.style.backgroundColor = "hsl(6, 63%, 50%)";
  document.querySelector(".toggle-container").style.backgroundColor = "#182034";

  document.querySelector(".del").style.backgroundColor = "#637097";
  document.querySelector(".del").style.boxShadow =
    "0px 2px 0px hsl(224, 28%, 35%)";
  document.querySelector(".del").style.color = "#fff";

  document.querySelector(".reset").style.backgroundColor = "hsl(225, 21%, 49%)";
  document.querySelector(".reset").style.boxShadow =
    "0px 2px 0px hsl(224, 28%, 35%)";
  document.querySelector(".reset").style.color = "#fff";

  document.querySelector(".equal").style.backgroundColor = "#d03f2f";
  document.querySelector(".equal").style.boxShadow =
    "0px 2px 0px hsl(6, 70%, 34%)";
  document.querySelector(".equal").style.color = "#fff";
});

// Second toggle color effect
p2.addEventListener("click", function () {
  toggle.classList.add("two");
  toggle.classList.remove("three");
  toggle.classList.remove("one");

  document.querySelector("main").style.backgroundColor = "hsl(0, 0%, 90%)";
  screen.style.backgroundColor = "hsl(0, 0%, 93%)";
  screen.style.color = "hsl(60, 10%, 19%)";
  btn.forEach(function (c) {
    c.style.color = "hsl(60, 10%, 19%)";
    c.style.backgroundColor = "hsl(45, 7%, 89%)";
    c.style.boxShadow = "0px 2px 0px hsl(35, 11%, 61%)";
  });
  btnContainer.style.backgroundColor = "hsl(0, 5%, 81%)";
  document.querySelector(".upper-item").style.color = "hsl(60, 10%, 19%)";
  toggle.style.backgroundColor = "hsl(6, 63%, 50%)";
  document.querySelector(".toggle-container").style.backgroundColor =
    "hsl(0, 5%, 81%)";

  document.querySelector(".del").style.backgroundColor = "hsl(185, 42%, 37%)";
  document.querySelector(".del").style.boxShadow =
    "0px 2px 0px hsl(185, 58%, 25%)";
  document.querySelector(".del").style.color = "hsl(0, 0%, 100%)";

  document.querySelector(".reset").style.backgroundColor = "hsl(185, 42%, 37%)";
  document.querySelector(".reset").style.boxShadow =
    "0px 2px 0px hsl(185, 58%, 25%)";
  document.querySelector(".reset").style.color = "hsl(0, 0%, 100%)";

  document.querySelector(".equal").style.backgroundColor = "hsl(25, 98%, 40%)";
  document.querySelector(".equal").style.boxShadow =
    "0px 2px 0px hsl(25, 99%, 27%)";
  document.querySelector(".equal").style.color = "hsl(0, 0%, 100%)";
});

//Third toggle color effect
p3.addEventListener("click", function () {
  toggle.classList.add("three");
  toggle.classList.remove("two");
  toggle.classList.remove("one");

  document.querySelector("main").style.backgroundColor = "hsl(268, 75%, 9%)";
  screen.style.backgroundColor = "hsl(268, 71%, 12%)";
  screen.style.color = "hsl(52, 100%, 62%)";
  btn.forEach(function (a) {
    a.style.color = "hsl(52, 100%, 62%)";
    a.style.backgroundColor = "hsl(268, 47%, 21%)";
    a.style.boxShadow = " 0px 2px 0px hsl(290, 70%, 36%)";
  });
  btnContainer.style.backgroundColor = "hsl(268, 71%, 12%)";
  document.querySelector(".upper-item").style.color = "hsl(52, 100%, 62%)";
  toggle.style.backgroundColor = "hsl(177, 92%, 70%)";
  document.querySelector(".toggle-container").style.backgroundColor =
    "hsl(268, 71%, 12%)";

  document.querySelector(".del").style.backgroundColor = "#7c05b3";
  document.querySelector(".del").style.boxShadow = "0px 2px 0px #9d08e3";
  document.querySelector(".del").style.color = "#fff";

  document.querySelector(".reset").style.backgroundColor = "#7c05b3";
  document.querySelector(".reset").style.boxShadow = "0px 2px 0px #9d08e3";
  document.querySelector(".reset").style.color = "hsl(0, 0%, 100%)";

  document.querySelector(".equal").style.backgroundColor =
    "hsl(176, 100%, 44%)";
  document.querySelector(".equal").style.boxShadow =
    "0px 2px 0px hsl(25, 99%, 27%)";
  document.querySelector(".equal").style.color = "hsl(268, 71%, 12%)";
});
