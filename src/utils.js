import logo from "./static/images/logo.jpeg";
class DE {
  constructor(name, text, classes) {
    this.name = name;
    this.text = text;
    this.classes = classes;
  }
  get name() {
    return this._name;
  }
  get text() {
    return this._text;
  }
  get classes() {
    return this._classes;
  }
  set name(value) {
    this._name = value || undefined;
  }
  set text(value) {
    value ? (this._text = value) : (this._text = undefined);
  }
  set classes(value) {
    value.length != 0 ? (this._classes = value) : (this._classes = undefined);
  }
  create() {
    var elm = document.createElement(this.name);

    if (this.text) {
      elm.textContent = this.text;
    }
    if (this.classes) {
      elm.classList.add(...this.classes);
    }
    return elm;
  }
}

function createHeader() {
  let header = new DE("header", "", ["flx"]).create();
  let img = new DE("img", "", ["logo-size"]).create();
  img.setAttribute("alt", "logo image");
  img.setAttribute("src", logo);
  img.setAttribute("id", "logo");

  let div = new DE("div", "", ["buttons", "flx"]).create();
  let btn1 = new DE("button", "Home", []).create();
  btn1.setAttribute("id", "home");
  let btn2 = new DE("button", "About", []).create();
  btn2.setAttribute("id", "about");
  let btn3 = new DE("button", "Menu", []).create();
  btn3.setAttribute("id", "menu");
  let btn4 = new DE("button", "Contact", []).create();
  btn4.setAttribute("id", "contact");

  div.append(btn1, btn2, btn3, btn4);
  header.append(img, div);
  return header;
}

export { DE, createHeader };
