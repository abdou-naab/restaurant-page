import { DE } from "./utils";
import styles from "./static/css/contact-content.lazy.css";
export { styles };

export default function serve(content) {
  let section = new DE("section", "", ["flx"]).create();
  let div = new DE("div", "", ["infos", "flx"]).create();
  let iframe = new DE("iframe", "", ["info", "flx"]).create();
  let p1 = new DE("p", "+966 53 470 0086", []).create();
  let p2 = new DE("p", "smokeybeardsq@gmail.com", []).create();
  iframe.setAttribute(
    "src",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d231953.33511005563!2d46.50953233409516!3d24.71757965131026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2ee3030159d4cf%3A0x8931850abb5178c9!2sSmokey%20Beards%20Q!5e0!3m2!1sen!2sdz!4v1694085619861!5m2!1sen!2sdz"
  );
  iframe.setAttribute("loading", "lazy");
  iframe.setAttribute("referrerpolicy", "no-referrer-when-downgrade");
  div.append(iframe, p1, p2);
  section.append(div);
  content.append(section);
}
