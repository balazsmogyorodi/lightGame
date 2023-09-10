import Lampa from "./lampa.js";
class JaterkTer {
  #db;
  #allapotLista;
  #meret;
  #lepes;
  #kivalasztott

  constructor() {
    this.#allapotLista = [];
    this.#meret = 3 * 3;
    this.#lepes = 0;
    this.#db = 0;
    this.#init();
    $(window).on("kapcsolas", (event) =>{
      this.#lepes += 1;
      console.log(this.#lepes);
      console.log(event);
      this.#kivalasztott.push(event.detail);
      const id = this.#kivalasztott[this.#lepes].getId();
      this.#setAllapotLista(id);   
      console.log(this.#allapotLista);
      this.#szomszedokKeresese()
      this.#ellenorzes();


    });
  }

  #setAllapotLista(id) {
  this.#allapotLista[id-1] = !this.#allapotLista[id-1];
  }

  #szomszedokKeresese() {}
  #init() {
    this.#kivalasztott = ["0"];
    const szuloElem = $("article");
    for (let index = 0; index < this.#meret; index++) {
      this.#allapotLista.push(this.#randomizalo());
    }
    console.log(this.#allapotLista);
    for (let index = 0; index < this.#allapotLista.length; index++) {
      new Lampa(index + 1, this.#allapotLista[index], szuloElem);
    }
  }

  #ellenorzes() {
    let ellenorzo = 0;
    while(this.#allapotLista[ellenorzo] == true && ellenorzo < this.#allapotLista.length){
      ellenorzo += 1;
    }
    if (ellenorzo == this.#allapotLista.length){
      console.log("vége");
    } else{
      console.log("A játék még folytatódik");
    }

  }

  #randomizalo() {
    const lampaMeghatarozo = Math.floor(Math.random() * 11);
    console.log(lampaMeghatarozo);
    if (lampaMeghatarozo > 5) {
      return true;
    } else {
      return false;
    }
  }
}
export default JaterkTer;
