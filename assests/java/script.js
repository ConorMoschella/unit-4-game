$(document).ready(function () {




  function crystalGame() {
    var wins = 0;
    var losses = 0;
    var counter = 0;
    var targetNumber = Math.floor(Math.random() * 83);
    $("#number-to-guess").text(targetNumber);
    var numberOptions = [10, 5, 3, 7];
    for (var q = 0; q < numberOptions.length; q++) {

      if (q === 0) {
        numberOptions[q] = Math.floor(Math.random() * 7 + 8);
      }
      else if (q === 1) {
        numberOptions[q] = Math.floor(Math.random() * 5 + 3);
      }
      else if (q === 2) {
        numberOptions[q] = Math.floor(Math.random() * 3 + 1);
      }
      else if (q === 3) {
        numberOptions[q] = Math.floor(Math.random() * 5 + 5);
      }
    }
    for (var i = 0; i < numberOptions.length; i++) {

      if (i === 0) {
        var imageCrystal = $("<img>");

        imageCrystal.addClass("crystal-image");

        imageCrystal.attr("src", "https://vignette.wikia.nocookie.net/marvel-contestofchampions/images/1/1c/2-Star_Crystal.png/revision/latest?cb=20150825213642");

        imageCrystal.attr("data-crystalvalue", numberOptions[i]);

        $("#crystals").append(imageCrystal);
      }
      else if (i === 1) {
        var imageCrystal = $("<img>");

        imageCrystal.addClass("crystal-image");

        imageCrystal.attr("src", "https://www.thoughtco.com/thmb/CMQsdwgP5AuwIhtrcW-zEZUPqWM=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/close-up-of-crystal-stone-glowing-in-darkroom-583919173-56f28e5d3df78ce5f83d7284.jpg  ");

        imageCrystal.attr("data-crystalvalue", numberOptions[i]);

        $("#crystals").append(imageCrystal);
      }
      else if (i === 2) {
        var imageCrystal = $("<img>");

        imageCrystal.addClass("crystal-image");

        imageCrystal.attr("src", "https://assets3.fossilera.com/sp/121088/amethyst-geodes/708x500%3E/quartz-var-amethyst.jpg");

        imageCrystal.attr("data-crystalvalue", numberOptions[i]);

        $("#crystals").append(imageCrystal);
      }
      else if (i === 3) {
        var imageCrystal = $("<img>");

        imageCrystal.addClass("crystal-image");

        imageCrystal.attr("src", "https://i.ebayimg.com/images/g/RicAAOSwCmNZzKKq/s-l1600.jpg");

        imageCrystal.attr("data-crystalvalue", numberOptions[i]);

        $("#crystals").append(imageCrystal);
      }
    }


    $(".crystal-image").on("click", function () {

      var crystalValue = ($(this).attr("data-crystalvalue"));
      crystalValue = parseInt(crystalValue);

      counter += crystalValue;

      alert("New score: " + counter);

      if (counter === targetNumber) {
        alert("You win!");
        wins++;
        document.getElementById("wins").innerHTML = 0 + wins
        counter = 0
        var newNumber = Math.floor(Math.random() * 83 + 13);
        $("#number-to-guess").text(newNumber);
        targetNumber = newNumber;
        $("#crystals").empty();
        crystalGame();
      }

      else if (counter >= targetNumber) {
        alert("You lose!!");
        losses++;
        document.getElementById("losses").innerHTML = 0 + losses
        counter = 0
        var newNumber = Math.floor(Math.random() * 83 + 13);
        $("#number-to-guess").text(newNumber);
        targetNumber = newNumber;
        $("#crystals").empty();
        crystalGame();
      }

    });
  }
  crystalGame();
})