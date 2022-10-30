//config shadow dom on tag

function shadowCreate() {
  setTimeout(() => {
    const shadowRootOne = document.getElementById('shadowEl').attachShadow({mode : 'open'}); 
    //add new p tag on shadow dom with same class that div 'normal dom'
    const shadowDomText = document.createElement('p');
    shadowDomText.setAttribute('class', 'title');
    shadowDomText.innerText = 'Shadow DOM';
    shadowRootOne.appendChild(shadowDomText);

    //add new tag on shadow title
    const shadowDomTextOne = document.createElement('p');
    shadowDomTextOne.setAttribute('class', 'shadowTitle');
    shadowDomTextOne.innerText = 'Shadow Dom with style';
    shadowRootOne.appendChild(shadowDomTextOne);

    //add style on shadow dom tag
    let styleShadow = document.createElement("style");

    styleShadow.textContent = `
    .shadowTitle {
      font-family: 'Fasthand', cursive;
      color: orchid;
    }`;
    shadowRootOne.appendChild(styleShadow);

  }, 150)
}
shadowCreate();
