let randomNumber = Math.floor(Math.random() * 20) + 1;

let randomDiceImage = "d" + randomNumber + ".png";

let randomImageSource = "images/" + randomDiceImage;

let image = document.querySelectorAll("img")[0]

image.setAttribute("src", randomImageSource);