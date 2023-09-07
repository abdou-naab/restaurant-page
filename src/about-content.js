import { DE } from "./utils";
import styles from "./static/css/about-content.lazy.css";
export { styles };

import mutah from "./static/images/mutah.jpeg";
export default function serve(content) {
  let img = new DE("img", "", ["mutah-img"]).create();
  img.setAttribute("src", mutah);
  img.setAttribute("alt", "the restaurant owner image");
  let section = new DE("section", "", ["flx"]).create();
  let article = new DE("article", "", ["about"]).create();
  let p = new DE(
    "p",
    "Buzzing, no-frills, Texas-style smokehouse · Satisfy your hunger and\
    your taste buds with our delicious meals.",
    []
  ).create();
  let q = new DE("q", "", []).create();
  let i = new DE("i", "if it ain't brisket, it ain't BBQ'", []).create();
  q.append(i);
  article.append(p, q);
  section.append(article);
  content.append(img, section);
}
