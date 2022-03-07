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

      let myLink = document.createElement('button');
      myLink.innerText = 'Description';
      myLink.onclick = () => {
          location.assign('./game.html#' + element.id);
      }

      let myDelete = document.createElement('button');
      myDelete.innerText = 'Suppression';
      myDelete.onclick = () => {
          // location.assign('../delete/' + element.id);
        let urlDelete = '../delete/' + element.id;
        let optionsDelete = {
          method: 'DELETE',
          headers: {'Accept': 'application/json',
                    'Content-Type': 'application/json'},
          mode: 'cors',
          cache: 'default'
      };
        fetch(urlDelete, optionsDelete)
            .then((res) => {
              if(res.ok) {
                return res.json();
              }
            })
            .then((response) => {
              console.log(response);
            });
    }

      myTitle.innerText = element.name;

      containerListe.appendChild(mySouls);
      mySouls.appendChild(myTitle);
      mySouls.appendChild(myLink);
      mySouls.appendChild(document.createElement('br'));
      mySouls.appendChild(myDelete);
    });
  });

  let btnNew = document.querySelector('#btnNew');
  btnNew.addEventListener('click', () => {
    location.assign('./add.html');
});