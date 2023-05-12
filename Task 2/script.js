const getDataButton = document.querySelector('#get-data-button');
const loader = document.querySelector('#loader');

const getUsersBtn = document.getElementById('get-users-btn');
getUsersBtn.addEventListener('click', () => {
  const loader = document.createElement('div');
  loader.classList.add('loader');
  document.body.appendChild(loader);

  fetch('https://api.example.com/users')
    .then(response => response.json())
    .then(data => {
      // Do something with the user data
      console.log(data);

      document.body.removeChild(loader);
    })
    .catch(error => {
      console.error(error);

      document.body.removeChild(loader);
    });
});