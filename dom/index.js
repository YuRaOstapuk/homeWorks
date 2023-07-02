// const bombOne = document.getElementById("bombOne");
// const bombTwo = document.getElementById("bombTwo");
// const bombThree = document.getElementById("bombThree");

// bombOne.addEventListener("click", (event) => {
//   event.target.innerText = "bomb here";

//   console.log(event);
// });
// bombTwo.addEventListener("click", () => {
//   console.log("click");
// });
// bombThree.addEventListener("click", () => {
//   console.log("click");
// });
const grandFather = document.getElementById(`grandFather`);
// const parent = document.getElementsById(`parent`);
// const child = document.getElementsById(`child`);

const listener = function () {
  console.log(this.id);
};
grandFather.addEventListener("click", listener);
parent.addEventListener("click", listener);
child.addEventListener("click", listener);
