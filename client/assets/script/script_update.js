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
let currName = document.querySelector('#currName');
let currDesc = document.querySelector('#currDesc');
let newGameName = document.querySelector('#name');
let newGameDesc = document.querySelector('#desc');

fetch(url, options)
  .then((res) => {
    if(res.ok) {
      return res.json();
    }
  })
  .then((response) => {
    pageTitle.innerText = `${response.name}`;
    currName.classList.add('font-medium', 'leading-tight', 'text-4xl', 'mt-0', 'mb-2', 'text-blue-600');
    currDesc.classList.add('font-medium', 'leading-tight', 'text-4xl', 'mt-0', 'mb-2', 'text-slate-600');
    currName.innerText = `${currName.innerText}`+' ' +`${response.name}`;
    currDesc.innerText = `${currDesc.innerText}`+'\n'+`\"${response.desc}\"`;
  });

  document.querySelector('#btnModify').addEventListener('click', () => {

    if(newGameName.value == "" || newGameDesc.value == ""){
      alert("Un des champs est vide, impossible d'appliquer la modification")
    }else {
        let urlU = '/data/';
        console.log(newGameName.value, newGameDesc.value);
        let tmp = {
            id: myId,
            name: `${newGameName.value}`,
            desc: `${newGameDesc.value}`
          };
        
          let options = {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            mode: 'cors',
            cache: 'default',
            body: JSON.stringify(tmp)
          };
        
          fetch(urlU, options)
            .then((res) => {
                console.log('fetch reached')
              if(res.ok) {
                console.log(res);  
                return res.json();
                
              }
            })
            .then((response) => {
              console.log(response);
            });
    }
      
    });