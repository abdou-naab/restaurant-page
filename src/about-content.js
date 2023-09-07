import { DE, createHeader } from "./utils";
// import "./static/css/about-content.css";

export default function serve(content) {
  let header = createHeader();
  let section = new DE("section", "", ["flx"]).create();
  let article = new DE("article", "", ["about"]).create();
  let p = new DE(
    "p",
    "Buzzing, no-frills, Texas-style smokehouse · Satisfy your hunger and\
    your taste buds with our delicious meals.",
    []
  ).create();
  let q = new DE("q", "", []).create();
  let i = new DE("i", "if it ain't brisket, it ain't BBQ',[]").create();
  q.append(i);
  article.append(p, q);
  section.append(article);
  content.append(header, section);
}
