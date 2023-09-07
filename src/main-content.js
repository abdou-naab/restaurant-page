import { DE, createHeader } from "./utils";
// import "./static/css/main-content.css";

export default function serve(content) {
  let header = createHeader();
  let section = new DE("section", "", ["flx"]).create();
  let div = new DE("div", "", []).create();
  let h2 = new DE("h2", "Marhaba to Smokey Beards Q", []).create();
  div.append(h2);
  section.append(div);
  content.append(header, section);
}
