import { DE } from "./utils";
import styles from "./static/css/main-content.lazy.css";
export { styles };

export default function serve(content) {
  let section = new DE("section", "", ["flx"]).create();
  let div = new DE("div", "", []).create();
  let h2 = new DE("h2", "Marhaba to Smokey Beards Q", []).create();
  div.append(h2);
  section.append(div);
  content.append(section);
}
