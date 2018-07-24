

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
    document.addEventListener('navigation-active', (data)=>{
      let superhero = data.detail.hero;
      let card = '';
      if(!superhero == "" )
      {

       card = `
        <section class="container card">
            <article class="items" id="${superhero._id}">
              <label class="item texto name">
                ${superhero.hero}
              </label><label class="item texto name">
                ${superhero.universo}
              </label><label class="item texto name">
                ${superhero.identidad}
              </label>
              <button class="hero ${superhero._id}">Eliminar</button>
          </article>
        </section>`;
      }
      let content = shadowRoot.querySelector('#container');
      content.innerHTML += card;
    });

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
        console.log(id);
        label.innerHTML='';
      }



      this.dispatchEvent(new CustomEvent('killEvt', {
        bubbles:true,
        composed:true,
        detail:{id}
      }));
    });

  }

  /*add(data) {
    let newCard = this.createCard(data);
    let content = this.shadowRoot.querySelector('#container');
    content.innerHTML += newCard;

    const butt = this.shadowRoot.querySelector('#hero'+data.hero._id);
     butt.addEventListener('click', () => {
       alert('workea');
     });
  }

  createCard(data) {
    let superhero = data.hero;
    let card = '';
    if(!superhero == "" )
    {

     card = `
      <section class="container card">
          <article class="items">
            <label class="item texto name">
              ${superhero.hero}
            </label><label class="item texto name">
              ${superhero.universo}
            </label><label class="item texto name">
              ${superhero.identidad}
            </label>
            <button id="hero${superhero._id}">Eliminar</button>
        </article>
      </section>`;
    }
    return card;
  }*/

  }

newElement.define('show-content', ShowContent);

})(window.customElements);
