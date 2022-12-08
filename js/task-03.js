const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const gallerys = document.querySelector(".gallery");
let arrayGalery = [];
images.forEach((image) => {
  // const content = `<li><img class = "js-img" src="${image.url}" alt="${image.alt}"></li>`;

  let listItem = document.createElement("li");
  let imgItem = document.createElement("img");
  imgItem.setAttribute("src", image.url);
  imgItem.setAttribute("alt", image.alt);
  imgItem.classList.add('js-img');
  listItem.append(imgItem);
  arrayGalery.push(listItem);
});

gallerys.append(...arrayGalery);
