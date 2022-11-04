import "./styles.css";
const container = document.getElementsByClassName("container");

for (let i = 0; i < 5; i++) {
  let div1 = document.createElement("div");
  let div2 = document.createElement("div");
  let div3 = document.createElement("div");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");
  let image = document.createElement("img");
  let urlImage = "https://dog.ceo/api/breed/beagle/images/random";

  div1.classList.add("wiki-item");
  h1.classList.add("wiki-header");
  div2.classList.add("wiki-content");
  p.classList.add("wiki-text");
  div3.classList.add("img-container");
  image.classList.add("wiki-img");
  h1.innerHTML = "Beagle";
  p.innerHTML = "Some text about this breed.";
  container[0].appendChild(div1);
  div1.appendChild(h1);
  div1.appendChild(div2);
  div2.appendChild(p);
  div2.appendChild(div3);

  dogImage();
  async function dogImage() {
    let urlDataImage = await fetch(urlImage);
    let data = await urlDataImage.json();
    let newdata = data.message;
    image.src = newdata;
    div3.appendChild(image);
  }
}
