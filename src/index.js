let button = document.querySelector(".front button");
let div = document.querySelectorAll(".front section div");
let startNumber = 0;
onload = () => {
  div.forEach((ele) => {
    ele.addEventListener("click", (e) => {
      // get informations
      e = e.target;
      let value = +e.innerText;
      // init all divs
      div.forEach((item) => item.classList.remove("active"));
      // check value if he is remove his rating
      if (value === startNumber) {
        startNumber = 0;
        return;
      }
      // main mathodes
      startNumber = value;
      e.classList.add("active");
    });
  });
};

button.addEventListener("click", () => {
  if (startNumber !== 0) {
    let front = document.querySelector(".front");
    let back = document.querySelector(".back");
    let span = document.querySelector(".back > p > span ");
    span.innerText = startNumber;
    back.classList.remove("hide");
    front.classList.add("hide");
  }
});
