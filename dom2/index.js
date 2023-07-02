const list = document.getElementById(`list`);
const op = document.getElementById(`op`);
const input = document.getElementById(`input`);

const onOpClick = () => {
  const elem = document.createElement("li");
  console.log(elem);
  elem.textContent = input.value;
};
op.addEventListener("click", onOpClick);
