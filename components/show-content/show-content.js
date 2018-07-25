

(function showContentDefiniton(newElement){

'use strict';






class ShowContent extends HTMLElement{

  constructor(){
    super();

  }

  connectedCallback () {


   let shadowRoot = this.attachShadow({mode: 'open'});
   const templateImport = document.querySelector('link[href="components/show-content/show-content.html"]').import;

   const template = templateImport.querySelector('#show-content');
   const instance = template.content.cloneNode(true);
   shadowRoot.appendChild(instance);
    /*
    document.addEventListener('navigation-active', (data)=>{
      let superhero = data.detail.hero;
      let card = '';
      if(!superhero == "" )
      {

       card = `
        <section class="container card" id="${superhero._id}">
            <article class="items">
              <label class="item texto">
                ${superhero.hero}
              </label><label class="item texto">
                ${superhero.universo}
              </label><label class="item texto">
                ${superhero.identidad}
              </label>
              <button class="hero ${superhero._id}">Eliminar</button>
          </article>
        </section>`;
      }
      let content = shadowRoot.querySelector('#container');
      content.innerHTML += card;
    });
    */

    this.shadowRoot.addEventListener('click', (e) => {
      let element = e.target.getAttribute('class');
      let btn = [];
      let id = '';
      let label= '';
      if (element != null){
        btn = element.split(' ');
      }
      if (btn[0] == 'hero'){
        id = element.split(' ')[1];

        label = this.shadowRoot.querySelector('#'+id);
        label.remove();
      }



      this.dispatchEvent(new CustomEvent('killEvt', {
        bubbles:true,
        composed:true,
        detail:{id}
      }));
    });

  }

  add (data) {
    let newCard = this.createCard(data);
    let content = this.shadowRoot.querySelector('#container');
    content.innerHTML += newCard;
  }

  createCard(data) {
    let superhero = data.hero;
    let card = '';

    if(!superhero == "" )
    {

     card = `
      <section class="container card" id="${superhero._id}">
          <article class="items">
            <label class="item texto">
              ${superhero.hero}
            </label><label class="item texto">
              ${superhero.universo}
            </label><label class="item texto">
              ${superhero.identidad}
            </label>
            <button class="hero ${superhero._id}">Eliminar</button>
        </article>
      </section>`;
    }

    return card;
  }

  }

newElement.define('show-content', ShowContent);

})(window.customElements);
