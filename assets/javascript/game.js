var targetNumber;
var win = 0;
var lose = 0;
var counter = 0;
var images = ["assets/images/c1.jpg", "assets/images/c2.jpg", "assets/images/c3.jpg", "assets/images/c4.jpg"];

var resetStart = function () {

    //generate a random number and display it 
    targetNumber = Math.floor((Math.random() * 102) + 19);
    console.log(targetNumber);
    $(".crystals").empty();

    $("#toGuess").html("Number to acheive :" + targetNumber);
    //make a div and inside it make 4 new divs for the 3 crystals
    //and for eachof them assign a random number//
    //each div element should hold a random number
    for (var i = 0; i < 4; i++) {
        var random = Math.floor((Math.random() * 12) + 1);
        console.log(random);

        var newcrystaldiv = $("<div>");
        newcrystaldiv.attr({
            "class": 'crystal',
            "data-random": random,

        });
        newcrystaldiv.css({
            "background-image": "url('" + images[i] + "')",
            //"background-color":"red",
            "background-size": "cover"
        });
        $(".crystals").append(newcrystaldiv);
    }

}
resetStart();
//crate an onlick function
//get the number and onclick increment counter with number
//and show it in screen each time onclick

$(document).on('click', ".crystal", function () {
    console.log(this);
    var number = parseInt($(this).attr('data-random'));
    console.log(number);
    counter = counter + number;
    $("#new").html("Your score now = " + counter);
    console.log(counter);
    if (counter > targetNumber) {
        lose++;
        console.log("u lost :" + lose);
        $("#winlose").html("<em> You lost!!<em> <br> Wins : " + win + "<br> Lose : " + lose);

        //add codes to reset
        counter = 0;
        $("#new").html("Your score = ");
        resetStart();
    } else if (counter === targetNumber) {
        win++;
        counter = 0;
        $("#new").html("Your score = ");
        console.log("u won :" + win);
        $("#winlose").html("<em>You won !!<em> <br> Wins : " + win + "<br> Lose : " + lose);
        resetStart();
    }
});