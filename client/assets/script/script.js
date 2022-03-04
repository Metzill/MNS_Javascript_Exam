let myHeaders = new Headers();
let url = '/data';
let options = {
  method: 'GET',
  headers: myHeaders,
  mode: 'cors',
  cache: 'default'
};

let containerListe = document.querySelector('#liste');

fetch(url, options)
  .then((res) => {
    if(res.ok) {
      return res.json();
    }
  })
  .then((response) => {
      console.log(response);
    response.forEach(element => {
      let mySouls = document.createElement('div');
      let myTitle = document.createElement('h2');

      let myLink = document.createElement('a');
      myLink.href = './game.html#' + element.id;
      myLink.innerText = 'Description';

      let myDelete = document.createElement('a');
      myDelete.href = '../delete#' + element.id;
      myDelete.innerText = 'Suppression';

      myTitle.innerText = element.name;

      containerListe.appendChild(mySouls);
      mySouls.appendChild(myTitle);
      mySouls.appendChild(myLink);
      mySouls.appendChild(document.createElement('br'));
      mySouls.appendChild(myDelete);
    });
  });