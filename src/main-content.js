export default function pageLoad() {
  let content = document.getElementById("content");
  let header = document.createElement("header");
  let logo = document.createElement("div");
  let img_headline = document.createElement("img");
  let info = document.createElement("p");

  content.append(header, img_headline, info);
}
