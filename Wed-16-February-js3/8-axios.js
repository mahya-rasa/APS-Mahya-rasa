const { ftruncate } = require("fs");

const url = "https://api.tvmaze.com/shows/1/episodes";

//axios
axios
  .get(url)
  .then(function (res) {
    console.log(res.data);
  })
  .catch(function (err) {
    console.log(err);
  });

// const fetchMovie = async () => {
//   try {
//     const res = await axios.get(url);
//     console.log(res.data);
//   } catch (error) {
//     console.log(error);
//   }
// };

const fetchMovie = async () => {
  const res = await axios.get(url);

  const data = res.data;

  for (const movie of data) {
    console.log(movie.name);
  }

  console.log(res.data);
};

fetchMovie();
