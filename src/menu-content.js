import { DE } from "./utils";
import styles from "./static/css/menu-content.lazy.css";
export { styles };

export default function serve(content) {
  let section = new DE("section", "", ["grid-menu"]).create();

  section.innerHTML = ` <div class='grid-menu-item'>
                            <h2>Fries</h2>
                            <span></span>
                            <p>Fries</p>
                            <p>12 SAR</p>
                            <p>Cheese Fries</p>
                            <p>23 SAR</p>
                            <p>Brisket Cheese Fries</p>
                            <p>39 SAR</p>
                            <p>Outlaw Fries</p>
                            <p>59 SAR</p>
                            </div>
                            <div class='grid-menu-item'>
                            <h2>Brisket</h2>
                            <span></span>
                            <p>1/2 lb (227gr) sliced/pulled</p>
                            <p>85 SAR</p>
                            <p>1 lb (454gr) sliced/pulled</p>
                            <p>170 SAR</p>
                            </div>
                            <div class='grid-menu-item'>
                            <h2>Sauces</h2>
                            <span></span>
                            <p>Mushroom Sauce</p>
                            <p>6 SAR</p>
                            <p>Cheese Sauce</p>
                            <p>6 SAR</p>
                            <p>BBQ Sauce</p>
                            <p>3</p>
                            <p>House Sauce</p>
                            <p>3</p>
                            </div>
                            <div class='grid-menu-item'>
                            <h2>Ribs</h2>
                            <span></span>
                            <p>American</p>
                            <p>159 SAR</p>
                            <p>Russian</p>
                            <p>158 SAR</p>
                            <p>Australian</p>
                            <p>157 SAR</p>
                            </div>
                            <div class='grid-menu-item'>
                            <h2>Sides</h2>
                            <span></span>
                            <p>Onion Strings</p>
                            <p>12 SAR</p>
                            <p>Mac & Cheese</p>
                            <p>21 SAR</p>
                            <p>Mac & Mushroom</p>
                            <p>21 SAR</p>
                            <p>South Western Slaw</p>
                            <p>11 SAR</p>
                            <p>Potato Salad</p>
                            <p>15 SAR</p>
                            </div>
                            <div class='grid-menu-item'>
                            <h2>Drinks</h2>
                            <span></span>
                            <p>Cocacola, Fanta, Sprite</p>
                            <p>6 SAR</p>
                            <p>Water</p>
                            <p>3 SAR</p>
                            <p>Green Cola</p>
                            <p>8 SAR</p>
                            </div>`;
  content.append(section);
}
