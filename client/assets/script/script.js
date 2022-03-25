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
    response.forEach(element => {
      let mySouls = document.createElement('div');
      let myTitle = document.createElement('h2');
      myTitle.classList.add('font-medium', 'leading-tight', 'text-4xl', 'mt-0', 'mb-2', 'text-blue-600');

      let myLink = document.createElement('button');
      myLink.innerText = 'Description';
      myLink.classList.add('bg-green-700', 'hover:bg-green-800','text-slate-200', 'font-bold', 'py-2', 'px-4', 'my-1', 'rounded');
      myLink.onclick = () => {
          location.assign('./game.html#' + element.id);
      }

      let myUpdate = document.createElement('button');
      myUpdate.innerText = 'Modifier';
      myUpdate.classList.add('bg-green-700', 'hover:bg-green-800','text-slate-200', 'font-bold', 'py-2', 'px-4', 'my-1', 'rounded');
      myUpdate.onclick = () => {
          location.assign('./update.html#' + element.id);
      }

      let myDelete = document.createElement('button');
      myDelete.innerText = 'Suppression';
      myDelete.classList.add('bg-red-800', 'hover:bg-red-900','text-slate-200', 'font-bold', 'py-2', 'px-4', 'my-1', 'rounded');
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
      mySouls.appendChild(myUpdate);
      mySouls.appendChild(document.createElement('br'));
      mySouls.appendChild(myDelete);
    });
  });

  let btnNew = document.querySelector('#btnNew');
  btnNew.addEventListener('click', () => {
    location.assign('./add.html');
});