var btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  var color1 = getRandomColor();
  var color2 = getRandomColor();
  var gradient = "linear-gradient(to right, " + color1 + ", " + color2 + ")";
  document.body.style.background = gradient;

});

// Create a function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  } 