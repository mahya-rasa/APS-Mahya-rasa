function highlightWords(paragraph, colours) {
  const content = document.querySelector("#content");
  const p = document.createElement("p");

  //select color
  const select = document.createElement("select");
  colours.forEach((element) => {
    const option = document.createElement("option");
    option.textContent = element;
    select.append(option);
  });

  //paragraph to array
  const paragraphArray = paragraph.split(" ");
  paragraphArray.forEach((element) => {
    const span = document.createElement("span");

    span.innerText = `${element} `;
    p.append(span);
    // span.addEventListener("click", function () {
    //   if (select.value === "none") {
    //     span.style.background = "";
    //   } else {
    //     span.style.backgroundColor = select.value;
    //   }
    // });
  });
  content.append(p, select);

  content.addEventListener("click", function (e) {
    console.log(e.target);
    if (select.value === "none") {
      e.target.style.background = "";
    } else {
      e.target.style.backgroundColor = select.value;
    }
  });

  // Write your code here...
}

const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";

const colours = ["yellow", "green", "blue", "none"];

highlightWords(paragraph, colours);
