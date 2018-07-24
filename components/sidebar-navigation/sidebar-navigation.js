

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
      }
    ]

   let shadowRoot = this.attachShadow({mode: 'open'});
   const templateImport = document.querySelector('link[rel="import"]').import;
   const template = templateImport.querySelector('#sidebar-navigation');
   const instance = template.content.cloneNode(true);
   shadowRoot.appendChild(instance);


   this.shadowRoot.addEventListener('click', (event)=>{
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

     document.addEventListener('killEvt', (data)=>{
       let id = '';
       let hero='';
       let label = ''
       if(data.detail.id!= ''){
         id = data.detail.id;
       }

       for (let i in superhero){
         if (id == superhero[i]._id){
           hero = superhero[i].hero.toLowerCase();
           label = this.shadowRoot.querySelector('#'+hero)
           label.innerHTML='';
         }
       }



     });
  }
}

newElement.define('sidebar-navigation', SidebarNavigation);

})(window.customElements);
