// Сделайте запрос по адресу https://reqres.in/api/users?page=1, обработайте ответ и выведите в консоль только тех юзеров у которых в поле last_name не менее 5ти символов
fetch("https://reqres.in/api/users?page=1")
  .then((obj) => obj.json())
  .then(({ data }) => {
    data.forEach(({ first_name }) => {
      if (first_name.length >= 5) {
        console.log(first_name);
      }
    });
  });
// Сделайте запрос по адресу https://reqes.in/api/users?page=1, обработайте ошибку этого запроса и выведите в консоль Не удалось загрузить данные
fetch("https://reqes.in/api/users?page=1").catch(() => console.log("ERROR"));
// Cделайте запрос https://reqres.in/api/users?page=1, ПОСЛЕ чего найдте id пользователя под именем и фамилией Emma Wong, сделайте следующий запрос на https://reqres.in/api/users/${id}, ПОСЛЕ выведите данные пользователя в консоль

async function getIdUser() {
  const obj = await fetch("https://reqres.in/api/users?page=1");
  const { data } = await obj.json();
  let emmaWong = data.find(
    ({ first_name, last_name }) => first_name === "Emma" && last_name === "Wong"
  );
  const objEma = await fetch(`https://reqres.in/api/users/${emmaWong.id}`);
  const {data :emmaData}=await objEma.json();
  console.log('emma',emmaData);
}
getIdUser();