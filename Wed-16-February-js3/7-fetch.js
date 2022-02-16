const url = "https://api.tvmaze.com/shows/1/episodes";

// fetch(url).then(function (res) {
//   console.log(res);
//   res.json().then(function (data) {
//     console.log(data);
//   });
// });

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    showImage(data);
  });

const showImage = (data) => {
  for (const element of data) {
    const img = document.createElement("img");
    img.src = element.image.medium;

    const h1 = document.createElement("h1");
    h1.textContent = element.name;

    document.body.prepend(h1, img);
  }
};
