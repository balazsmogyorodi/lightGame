class Lampa {
  #allapot;
  #id;
  #ellenorzes;
  #szuloElem;
  #divElem;

  constructor(id, allapot, szuloElem) {
    this.#id = id;
    this.#szuloElem = szuloElem;
    this.#allapot = allapot;
    this.#divElem = $(`<div id="${id}"></div>`);
    this.#divElem.addClass("kor");
    this.#szinBeallit();
    szuloElem.append(this.#divElem);
    this.#divElem.on("click", () => {
      if (this.#allapot == false) {
        this.#allapot != this.#allapot;
        this.#divElem.removeClass();
        this.#divElem.addClass("kor");
        this.setAllapot();
        this.#kattintasTrigger();
      } else {
        return;
      }
    });
  }

  setAllapot() {
    this.#allapot = !this.#allapot;
    this.#szinBeallit();
  }

  #szinBeallit() {
    console.log(this.#allapot);
    this.#divElem.addClass(this.#allapot === true ? "sarga" : "zold");
  }

  getId() {
    return this.#id;
  }

  #kattintasTrigger() {
    const esemenyTrigger = new CustomEvent("kapcsolas", { detail: this });
    window.dispatchEvent(esemenyTrigger);
    console.log(esemenyTrigger);
  }
}
export default Lampa;
