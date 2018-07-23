

(function sidebarNavigationDefiniton(newElement){
   
'use strict';

class SidebarNavigation extends HTMLElement{
 
  constructor(){
    super();

  }

  connectedCallback () {

   let shadowRoot = this.attachShadow({mode: 'open'});
   const templateImport = document.querySelector('link[rel="import"]').import;
   const template = templateImport.querySelector('#sidebar-navigation');
   const instance = template.content.cloneNode(true);
   shadowRoot.appendChild(instance);

   this.addEventListener('click', (event)=>{
     const element = event.target;
      this.dispatchEvent(new CustomEvent('navigation-active', {
        bubbles:true,
        composed:false,
        detail:{element}
      }));
   });
   
  }
}

newElement.define('sidebar-navigation', SidebarNavigation);

})(window.customElements);  




