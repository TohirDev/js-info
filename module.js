class MyComp extends HTMLElement {
  constructor() {
    super();
    this.cardName = "";
    this.context = "";
    this.button = "";
    this.img = "";
    this.imgWidth = "";
    this.imgHeight = "";
  }

  connectedCallback() {
    this.cardName = this.getAttribute("cardName");
    this.context = this.getAttribute("context");
    this.button = this.getAttribute("button");
    this.img = this.getAttribute("img");
    this.imgHeight = this.getAttribute("imgHeight");
    this.imgWidth = this.getAttribute("imgWidth");

    this.render();
  }

  render() {
    this.innerHTML = `
            <div class="card">
                <h1>${this.cardName}</h1>
                <h1>${this.context}</h1>
                <h1>${this.button}</h1>
                <img src="${this.img}" style="width: ${this.imgWidth}; height: ${this.imgHeight}" alt="${this.cardName}" />
            </div>
        `;
  }
}

customElements.define("el-card", MyComp);
