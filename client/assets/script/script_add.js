let myHeaders = new Headers();
let url = '/data';
let options = {
  method: 'GET',
  headers: myHeaders,
  mode: 'cors',
  cache: 'default'
};

let newGameName = document.querySelector('#name');
let newGameDesc = document.querySelector('#desc');

document.querySelector('#btnAdd').addEventListener('click', () => {

  if(newGameName == "" || newGameDesc == ""){
    alert("Un des champs est vide, impossible de créer le jeu")
  }else {
    fetch(url, options)
    .then((res) => {
      if(res.ok) {
        return res.json();
      }
    })
    .then((response) => {
        let tmp = {
            id: response.length,
            name: `${newGameName.value}`,
            desc: `${newGameDesc.value}`
          };
        
          let options = {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            mode: 'cors',
            cache: 'default',
            body: JSON.stringify(tmp)
          };
        
        
          fetch(url, options)
            .then((res) => {
              if(res.ok) {
                return res.json();
              }
            })
            .then((response) => {
              console.log(response);
            });
    });
  }
    
  });