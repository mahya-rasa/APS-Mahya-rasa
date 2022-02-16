//request
//http://makeup-api.herokuapp.com/api/v1/products.json

const request = new XMLHttpRequest();
request.open("GET", "https://api.tvmaze.com/shows/82/episodes");

request.send();

let response = "test";

request.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    console.log(JSON.parse(this.response));
    response = JSON.parse(this.response);
  }
};

console.log(response);

//0
//1
//2
//3
//4
