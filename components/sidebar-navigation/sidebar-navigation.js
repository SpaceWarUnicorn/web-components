

(function sidebarNavigationDefiniton(newElement){

'use strict';

class SidebarNavigation extends HTMLElement{

  constructor(){
    super();
  }

  connectedCallback () {

  let superhero = [
    {
      _id:'one',
      hero: 'Spiderman',
      universo:'marvel',
      identidad:'peter parker'
    },
    {
      _id:'two',
      hero: 'Batman',
      universo:'DC',
      identidad:'Bruno Diaz'
    },
    {
      _id:'three',
      hero: 'Goku',
      universo:'Dragon Ball',
      identidad:'Son-Goku'
    },
    {
      _id:'four',
      hero: 'Flash',
      universo:'DC',
      identidad:'Barry Allen'
    },
    {
      _id:'five',
      hero: 'DareDevil',
      universo:'Marvel',
      identidad:'Matt Murdoc'
    },
    {
      _id:'six',
      hero: 'AllMight',
      universo:'My Hero Academia',
      identidad:'Yagi Toshinori'
    }
  ]

   let shadowRoot = this.attachShadow({mode: 'open'});
   const templateImport = document.querySelector('link[rel="import"]').import;
   const template = templateImport.querySelector('#sidebar-navigation');
   const instance = template.content.cloneNode(true);
   shadowRoot.appendChild(instance);

   let section = this.shadowRoot.querySelector('section');
   let heros='';
   for (let i in superhero){
     heros+= `<p id='${superhero[i].hero}' class='edit_p'>${superhero[i].hero}</p>`;
   }

   section.innerHTML += heros;

   shadowRoot.addEventListener('click', (event)=>{
     let element = event.target.innerHTML;
     let hero='';
     for (let i in superhero){
       if (element == superhero[i].hero){
         hero = superhero[i];
       }
     }

      this.dispatchEvent(new CustomEvent('navigation-active', {
        bubbles:true,
        composed:true,
        detail:{hero}
      }));
   });
  }


  killHero(data){
    let id = this.shadowRoot.querySelector('#'+data);
    if(id != null){
      id.remove();
    }
  }


}

newElement.define('sidebar-navigation', SidebarNavigation);

})(window.customElements);
