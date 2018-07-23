

(function showContentDefiniton(newElement){
   
'use strict';

class ShowContent extends HTMLElement{
 
  constructor(){
    super();

  }

  connectedCallback () {


   let shadowRoot = this.attachShadow({mode: 'open'});
   const templateImport = document.querySelector('link[href="components/show-content/show-content.html"]').import;
   
   //const templateImport = documentImport.querySelector('link[rel="import"]').import;
console.log(templateImport)

   const template = templateImport.querySelector('#show-content');
   const instance = template.content.cloneNode(true);
   shadowRoot.appendChild(instance);
  this.addEventListener('navigation-active', (event)=>{
    console.log("Listener show content", event)
  });
   
  }
}

newElement.define('show-content', ShowContent);

})(window.customElements);  



