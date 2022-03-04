let myId = window.location.hash.split('#')[1];

let myHeaders = new Headers();
let url = '/data/' + myId;
let options = {
  method: 'GET',
  headers: myHeaders,
  mode: 'cors',
  cache: 'default'
};

let containerData = document.querySelector('#content');
let pageTitle =  document.querySelector('#title');

fetch(url, options)
  .then((res) => {
    if(res.ok) {
      return res.json();
    }
  })
  .then((response) => {
    pageTitle.innerText = `${response.name}`;
    let mySouls = document.createElement('div');
    let myTitle = document.createElement('h1');
    let myDesc = document.createElement('p');
    myTitle.innerText =  `${response.name}`;
    myDesc.innerText = `${response.desc}`;

    containerData.appendChild(mySouls);
    mySouls.appendChild(myTitle);
    mySouls.appendChild(myDesc);
  });