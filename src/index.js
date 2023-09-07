import { createHeader } from "./utils";
import mainContent from "./main-content";
import { styles as mainStyles } from "./main-content";
import aboutContent from "./about-content";
import { styles as aboutStyles } from "./about-content";
import menuContent from "./menu-content";
import { styles as menuStyles } from "./menu-content";
import contactContent from "./contact-content";
import { styles as contactStyles } from "./contact-content";

let content = document.querySelector("#content");
let header = createHeader();
content.append(header);

let logo = document.getElementById("logo");
let home = document.getElementById("home");
let about = document.getElementById("about");
let menu = document.getElementById("menu");
let contact = document.getElementById("contact");
let currentStyle = mainStyles;
function clearContent() {
  for (let elm of [...content.children]) {
    if (elm != header) {
      elm.remove();
    }
  }
}

function changeCurrentStyle(style) {
  currentStyle.unuse();
  currentStyle = style;
  currentStyle.use();
}
mainContent(content);
currentStyle.use();

logo.addEventListener("click", (e) => {
  changeCurrentStyle(mainStyles);
  clearContent();
  mainContent(content);
});
home.addEventListener("click", (e) => {
  changeCurrentStyle(mainStyles);
  clearContent();
  mainContent(content);
});
about.addEventListener("click", (e) => {
  changeCurrentStyle(aboutStyles);
  clearContent();
  aboutContent(content);
});
menu.addEventListener("click", (e) => {
  changeCurrentStyle(menuStyles);
  clearContent();
  menuContent(content);
});
contact.addEventListener("click", (e) => {
  changeCurrentStyle(contactStyles);
  clearContent();
  contactContent(content);
});
