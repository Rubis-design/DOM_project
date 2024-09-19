//Задача 1: DOM-дерево
let button = document.getElementById('myButton');
button.addEventListener('mouseover', () => {
  button.style.backgroundColor = 'red';
  button.textContent = 'Нажми меня';
});

//Задача 2: Обработчики событий
let input = document.getElementById('textInput');
let displayText = document.getElementById('displayText');

input.addEventListener('input', () => {
  let newText = input.value;
  displayText.textContent = `${newText}`;
});

//Задача 3: Работа с формой
const form = document.getElementById('myForm');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  let username = document.querySelector('input[name = "username"]').value;
  console.log(`${username}`);
});

//Задача 4: Fetch и FormData
const form2 = document.getElementById('myForm2');
form2.addEventListener('submit', (event2) => {
  event2.preventDefault();
  const formData = new FormData();
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log('Ошибка', error));
});

//Задача 5: Cookie
let btnCookie = document.getElementById('setCookie');
btnCookie.addEventListener('click', () => {
  document.cookie = 'username = JohnDoe;';
  const msg = document.createElement('p');
  msg.innerHTML = 'Cookie успешно установлены';
  document.body.appendChild(msg);
});

//Задача 6: LocalStorage и SessionStorage
let btnLocal = document.getElementById('saveLocal');
let btnSession = document.getElementById('saveSession');
btnLocal.addEventListener('click', () => {
  localStorage.setItem('username', 'JohnDoe');
  const msg2 = document.createElement('p');
  msg2.innerHTML = 'Данные успешно сохранены в LocalStorage';
  document.body.appendChild(msg2);
});
btnSession.addEventListener('click', () => {
  sessionStorage.setItem('sessionToken', 'abc');
  const msg3 = document.createElement('p');
  msg3.innerHTML = 'Данные успешно сохранены в SessionStorage';
  document.body.appendChild(msg3);
});
